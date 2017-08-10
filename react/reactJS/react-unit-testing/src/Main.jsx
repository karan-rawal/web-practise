import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './App/Containers/App.Container';
import AppReducer from './App/Reducers/App.Reducer';

const reducers = {
  AppReducer,
};

const combinedReducers = combineReducers(reducers);
const store = createStore(combinedReducers);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);
