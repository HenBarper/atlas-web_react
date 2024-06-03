import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import uiReducer from './reducers/uiReducer';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    ui: uiReducer
  }
});
// export const store = createStore(uiReducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

export default store;