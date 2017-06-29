import React from 'react';
import ReactDOM from 'react-dom';
import {Contact} from './Contact';


/**
 * The main component for the application.
 * 
 * @author Karan Rawal
 * @export
 * @class AppComponent
 * @extends {React.Component}
 */
export class AppComponent extends React.Component{

    /**
     * A simple foo function.
     * 
     * @param {any} a The first parameter.
     * @param {any} b The second parameter.
     * 
     * @memberOf AppComponent
     */
    foo(a, b){

    }

    render(){
        return (
            <div>
                <Contact></Contact>
                <Contact></Contact>
                <Contact></Contact>
            </div>
        );
    }
}