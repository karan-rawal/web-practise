import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './app/components/app';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import MovieReducer from './movie/reducers/movie';

let combinedReducers = combineReducers({
    movieReducer : MovieReducer
});
let store = createStore(combinedReducers);

import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <AppComponent />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);