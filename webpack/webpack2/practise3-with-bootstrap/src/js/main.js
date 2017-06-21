import React from 'react';
import ReactDOM from 'react-dom';

require('../stylesheets/main.scss');
require('../stylesheets/main.scss');
require('bootstrap-sass/assets/stylesheets/_bootstrap.scss');

class AppComponent extends React.Component{
    render(){
        return(
            <div>
                <p>Hello world.</p>
                <h1>h1 asdf</h1>
                <span className="glyphicon glyphicon-plus"></span>
                <img src={require('../images/img.jpg')}></img>
            </div>
        );
    }
}

ReactDOM.render(<AppComponent/>, document.getElementById("root"));