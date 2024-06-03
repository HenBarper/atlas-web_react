import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import App, { mapStateToProps } from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import Footer from '../Footer/Footer';

const mockStore = configureStore([]);
const initialState = fromJS({
  isUserLoggedIn: false,
  isNotificationDrawerVisible: false,
});
const store = mockStore(initialState);

describe('App component tests', () => {
    let wrapper;

    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection(); // If you're using aphrodite
        // global.alert = jest.fn();
        wrapper = shallow(
          <Provider store={store}>
            <App />
          </Provider>
        ).dive();
      });

    afterEach(() => {
        // jest.restoreAllMocks();
        wrapper.unmount();
    });

    test('App renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('App contains the Notifications component', () => {
        expect(wrapper.find(Notifications).exists()).toBe(true);
    });

    test('App contains the Header component', () => {
        expect(wrapper.find(Header).exists()).toBe(true);
    });

    test('App contains the Login component', () => {
        expect(wrapper.find(Login).exists()).toBe(true);
    });

    test('App contains the Footer component', () => {
        expect(wrapper.find(Footer).exists()).toBe(true);
    });

    test('CourseList is not displayed when isLoggedIn is false', () => {
        expect(wrapper.find(CourseList).exists()).toBe(false);
    });

    test('Login is not displayed when isLoggedIn is true', () => {
        wrapper.setState({
            user: {
                email: 'test@example.com',
                password: '123', isLoggedIn: true
            }
        });
        expect(wrapper.find(Login).exists()).toBe(false);
    });

    test('CourseList is displayed when isLoggedIn is true', () => {
        wrapper.setState({
            user: {
                email: 'test@example.com',
                password: '123', isLoggedIn: true
            }
        });
        expect(wrapper.find(CourseList).exists()).toBe(true);
    });

    test('verify that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out', () => {
        const logOutMock = jest.fn(() => {
            wrapper.instance().logOut();
        });
        wrapper.setState({
            user: {
                email: 'test@example.com',
                password: '123', isLoggedIn: true
            }
        });
        wrapper.setProps({
            logOut: logOutMock
        });

        const event = {
            key: 'h',
            ctrlKey: true,
            preventDefault: jest.fn(),
        };

        wrapper.instance().handleKeyDown(event);

        expect(global.alert).toHaveBeenCalledWith('Logging you out');
        expect(logOutMock).toHaveBeenCalled();
        expect(wrapper.state().user.isLoggedIn).toBe(false);
    });

    test('verify that the default state for displayDrawer is false, then true after calling handleDisplayDrawer', () => {
        expect(wrapper.state('displayDrawer')).toBe(false);
        wrapper.instance().handleDisplayDrawer();
        expect(wrapper.state('displayDrawer')).toBe(true);
    });

    test('verify that after calling handleHideDrawer, the state is updated to be false', () => {
        wrapper.instance().handleDisplayDrawer();
        expect(wrapper.state('displayDrawer')).toBe(true);
        wrapper.instance().handleHideDrawer();
        expect(wrapper.state('displayDrawer')).toBe(false);
    });

    test('verify that the logIn function updates the state correctly', () => {
        wrapper.instance().logIn('test@example.com', 'password');
        expect(wrapper.state().user).toEqual({ email: 'test@example.com', password: 'password', isLoggedIn: true });
    });

    test('verify that the logOut function updates the state correctly', () => {
        wrapper.setState({ user: { email: 'test@example.com', password: '123', isLoggedIn: true } });
        wrapper.instance().logOut();
        expect(wrapper.state().user).toEqual({ email: '', password: '', isLoggedIn: false });
    });

    test('verify that markNotificationAsRead works as intended', () => {
        wrapper.setState({
            user: {
                email: 'test@example.com',
                password: '123',
                isLoggedIn: true,
            },
            listNotifications: [
                { id: 1, type: 'default', value: 'notification 1' },
                { id: 2, type: 'urgent', value: 'notification 2' },
                { id: 3, type: 'default', value: 'notification 3' },
                { id: 4, type: 'urgent', value: 'notification 4' },
            ],
        });
        expect(wrapper.state('listNotifications').length).toBe(4);
        wrapper.instance().markNotificationAsRead(2);
        expect(wrapper.state('listNotifications').length).toBe(3);
        expect(wrapper.state('listNotifications')).toEqual([
            { id: 1, type: 'default', value: 'notification 1' },
            { id: 3, type: 'default', value: 'notification 3' },
            { id: 4, type: 'urgent', value: 'notification 4' }
        ]);
    });
});

// New suite for mapStateToProps
describe('mapStateToProps', () => {
    test('returns the correct object when passing the state', () => {
        const state = fromJS({
            isUserLoggedIn: true,
            isNotificationDrawerVisible: true,
        });
        const expectedProps = {
            isLoggedIn: true,
            displayDrawer: true,
        };
        expect(mapStateToProps(state)).toEqual(expectedProps);
    });
});
