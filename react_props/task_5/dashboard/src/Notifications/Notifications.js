import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Notifications.css'
import { getLatestNotification } from '../utils/utils'
import NotificationItem from './NotificationItem'
import { NotificationItemShape } from './NotificationItemShape';

function Notification({ displayDrawer = true, listNotifications = [] }) {
  return (
    <>
      <div className='wholeNotification'>
        <div className='menuItem'>
          <p>Your Notifications</p>
        </div>
        {displayDrawer && (
          <div className='Notifications'>
            <button
              className='close-button'
              type='button'
              onClick={() => console.log('Close button has been clicked')}
              style={{ display: 'inline', position: 'absolute', top: '1px', right: '1px', background: 'none', border: 'none' }}
              aria-label='Close'
            >
            <span style={{ fontSize: '24px' }} aria-hidden='true'>&times;</span>
            </button>
            {listNotifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <ul>
                  {listNotifications.map((notification) => (
                    <NotificationItem key={notification.id} html={notification.html} type={notification.type} value={notification.value} />
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
    </>
  )
}

Notification.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

export default Notification
