import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import Footer from './Footer';

const mockStore = configureStore([]);
const initialState = fromJS({
  ui: {
    isUserLoggedIn: false,
  },
});
const store = mockStore(initialState);

describe('Footer component tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Footer />
      </Provider>
    ).dive();
  });

  test('Footer renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('Footer renders a div with the class App-footer', () => {
    expect(wrapper.find('.App-footer').length).toBe(1);
  });

  test('Footer contains the correct text', () => {
    expect(wrapper.text()).toContain('Copyright');
  });

  test('verify that the contact link is not displayed when the user is logged out', () => {
    expect(wrapper.find('.contact-us').exists()).toBe(false);
  });

  test('verify that the contact link is displayed when the user is logged in', () => {
    const loggedInState = fromJS({
      ui: {
        isUserLoggedIn: true,
      },
    });
    const loggedInStore = mockStore(loggedInState);
    const loggedInWrapper = shallow(
      <Provider store={loggedInStore}>
        <Footer />
      </Provider>
    ).dive();
    expect(loggedInWrapper.find('.contact-us').exists()).toBe(true);
  });
});
