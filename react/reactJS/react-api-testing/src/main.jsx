import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AppReducer from './Components/App/Reducers/AppReducer';
import AppContainer from './Components/App/Containers/AppContainer';

// Create the combiner reducer.
const combinedReducer = combineReducers({
  AppReducer,
});

// Create the store.
const store = createStore(combinedReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store} >
  <AppContainer />
</Provider>, document.getElementById('root'));
