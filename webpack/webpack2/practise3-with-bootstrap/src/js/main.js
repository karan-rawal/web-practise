import React from 'react';
import ReactDOM from 'react-dom';

require('../stylesheets/main.scss');
require('../stylesheets/main.scss');
require('bootstrap-sass/assets/stylesheets/_bootstrap.scss');

class AppComponent extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-8">
                        <p>Col sm 8</p>
                    </div>
                    <div className="col-sm-4">
                        Col sm 4
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<AppComponent/>, document.getElementById("root"));