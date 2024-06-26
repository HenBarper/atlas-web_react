import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';

describe('App component tests', () => {
    let wrapper;

    // This will run before each test and create a shallow render of the App component
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    afterEach(() => {
        jest.restoreAllMocks();
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
        wrapper = shallow(<App isLoggedIn={false} />);
        expect(wrapper.find(CourseList).exists()).toBe(false);
    });

    test('Login is not displayed when isLoggedIn is true', () => {
        wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find(Login).exists()).toBe(false);
    });

    test('CourseList is displayed when isLoggedIn is true', () => {
        wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find(CourseList).exists()).toBe(true);
    });

    test('verify that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out', () => {
        const logOutMock = jest.fn();
        const wrapper = shallow(<App logOut={logOutMock} />);
        
        const event = {
            key: 'h',
            ctrlKey: true,
            preventDefault: jest.fn(),
        };
        
        wrapper.instance().handleKeyDown(event);
    
        expect(global.alert).toHaveBeenCalledWith('Logging you out');
        expect(logOutMock).toHaveBeenCalled();
    });
});
