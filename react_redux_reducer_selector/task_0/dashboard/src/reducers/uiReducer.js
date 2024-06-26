import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT  } from '../actions/uiActionTypes'
import { SELECT_COURSE } from '../actions/courseActionTypes';

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
}

export default function uiReducer(state = initialState, action) {
  switch (action.type) {

    case DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true
      };
    
    case HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: fase
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true
      };

    case LOGIN_FAILURE:
      return {
        isUserLoggedIn: false
      };

    case LOGOUT:
      return {
        isUserLoggedIn: false
      };

    default:
      return state;
  }
}