import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";

const defaultState = {
  notifications: [],
  filter: 'DEFAULT'
}

export default function notificationReducer(state = defaultState, action) {
  switch (action.type) {
    case MARK_AS_READ:
      return {
        ...state,
        notifications: 
          state.notifications.map(notification => notification.id === action.index ? { ...notification, isRead: true } : notification),
      };

    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter,
      };

    case FETCH_NOTIFICATIONS_SUCCESS:
      return { ...state, notifications: action.data.map(notification => ({ ...notification, isRead: false })) };

    default:
      return state;
  }
};