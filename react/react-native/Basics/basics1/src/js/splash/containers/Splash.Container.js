import React from 'react';
import { Actions } from 'react-native-router-flux';
import Splash from '../components/Splash.Component';
import Constants from '../Constants';

export default class SplashContainer extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            Actions.pop();
            Actions.KEY_LOGIN();
        }, Constants.SPLASH_DURATION);
    }

    render() {
        return (
            <Splash />
        );
    }
}