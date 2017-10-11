import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Constants from '../../app/Constants';
import Login from '../../login/containers/Login.Container';
import Splash from '../../splash/containers/Splash.Container';

const App = (props) => {
    return (
        <Router>
            <Scene key={Constants.KEY_ROOT}>
                <Scene key={Constants.KEY_SPLASH} component = {Splash} title = "Splash" initial = {true} />
                <Scene key={Constants.KEY_LOGIN} component = {Login} title = "Login" />
            </Scene>
        </Router>
    );
}

export default App;