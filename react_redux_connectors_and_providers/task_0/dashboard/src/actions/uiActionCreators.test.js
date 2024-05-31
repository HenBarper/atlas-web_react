import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginSuccess, loginFailure, loginRequest } from "./uiActionCreators";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('UI action creator tests', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test('should correct LOGIN object', () => {
    const email = 'test@email.com';
    const password = 'Password123';
    const expectedAction = {
      type: LOGIN,
      user: { email, password }
    };
    expect(login(email, password)).toEqual(expectedAction);
  });

  test('should return correct LOGOUT object', () => {
    const expectedAction = {
      type: LOGOUT
    };
    expect(logout()).toEqual(expectedAction);
  });

  test('should return correct DISPLAY_NOTIFICATION_DRAWER object', () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER
    };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

  test('should return correct HIDE_NOTIFICATION_DRAWER object', () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER
    };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });

  // test('verify that if the API returns the right response, the store received two actions LOGIN and LOGIN_SUCCESS', async () => {
  //   const email = 'test@example.com';
  //   const password = 'Password123';

  //   fetchMock.getOnce('http://localhost/dist/login-success.json', {
  //     body: { success: true },
  //     headers: { 'content-type': 'application/json' }
  //   });

  //   const expectedActions = [
  //     { type: LOGIN, user: { email, password } },
  //     { type: LOGIN_SUCCESS }
  //   ];
  //   const store = mockStore({});
  //   await store.dispatch(loginRequest(email, password));
  //   expect(store.getActions()).toEqual(expectedActions);
  // });

  // test('verify that if the API query fails, the store received two actions LOGIN and LOGIN_FAILURE', async () => {
  //   const email = 'test@example.com';
  //   const password = 'Password123';

  //   fetchMock.getOnce('http://localhost/dist/login-success.json', 500);

  //   const expectedActions = [
  //     { type: LOGIN, user: { email, password } },
  //     { type: LOGIN_FAILURE }
  //   ];
  //   const store = mockStore({});
  //   await store.dispatch(loginRequest(email, password));
  //   expect(store.getActions()).toEqual(expectedActions);
  // });
});

