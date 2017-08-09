import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import AppContainer from './App/Container/AppContainer';
import AppReducer from './App/Reducer/AppReducer';

const reducers = combineReducers({
  AppReducer,
});

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);
