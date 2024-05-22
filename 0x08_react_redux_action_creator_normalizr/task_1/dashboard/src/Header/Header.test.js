import React from 'react';
import { mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';
import AppContext from '../App/AppContext';

describe('Header component tests', () => {
    let contextValue;
    let wrapper;

    beforeEach(() => {
        contextValue = {
            user: {
                email: 'test@example.com',
                password: '',
                isLoggedIn: true
            },
            logOut: jest.fn(),
        };
        StyleSheetTestUtils.suppressStyleInjection();
        wrapper = mount(
            <AppContext.Provider value={contextValue}>
                <Header />
            </AppContext.Provider>
        );
        jest.spyOn(console, 'error').mockImplementation((msg) => {
            if (!msg.includes('findDOMNode')) {
              console.error(msg);
            }
          });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('Header renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('Header contains a logout section when user is logged in', () => {
        expect(wrapper.find('#logoutSection').exists()).toBe(true);
        expect(wrapper.find('#logoutSection').text()).toContain('Welcome test@example.com');
    });

    test('Clicking logout link calls logOut function', () => {
        wrapper.find('#logoutSection a').simulate('click');
        expect(contextValue.logOut).toHaveBeenCalled();
    });
});
