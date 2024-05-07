import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component tests', () => {
    let wrapper;

    // This will run before each test and create a shallow render of the Notifications component
    beforeEach(() => {
        wrapper = shallow(<Notifications />);
    });

    test('Notifications renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('Notifications renders the text "Here is the list of notifications"', () => {
        expect(wrapper.text().includes('Here is the list of notifications')).toBe(true);
    });

    // Notification Item Tests ---------------------------------------------------------------------
    test('Notifications renders NotificationItem components', () => {
        const notificationItems = wrapper.find(NotificationItem);
        expect(notificationItems.length).toBe(3);
    });

    test('Verifying the first NotificationItem renders the correct html', () => {
        const firstNotificationItem = wrapper.find(NotificationItem).first();

        expect(firstNotificationItem.shallow().text()).toBe('New Course Available');
    });
});
