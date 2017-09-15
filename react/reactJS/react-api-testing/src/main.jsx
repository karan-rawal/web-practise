import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import AppReducer from './Components/App/Reducers/AppReducer';
import AppContainer from './Components/App/Containers/AppContainer';

// Create the combiner reducer.
const combinedReducer = combineReducers({
  AppReducer,
});

// Create the store.
const store = createStore(combinedReducer);

ReactDOM.render(<Provider store={store} >
  <AppContainer />
</Provider>, document.getElementById('root'));
