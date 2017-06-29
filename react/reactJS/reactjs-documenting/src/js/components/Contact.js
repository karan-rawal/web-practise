import React from 'react';
import ReactDOM from 'react-dom';

/**
 * The Contact component. Represents a single contact on the UI.
 * 
 * @author Karan Rawal
 * @export
 * @class Contact
 * @extends {React.Component}
 */
export class Contact extends React.Component{
    render(){
        return(
            <div>
                Name : <strong>Karan</strong><br/>
                Company : <strong>Spring CT</strong><br/>
                Location : <strong>Kothrud</strong><br/>
                <br/>
            </div>
        );
    }
}