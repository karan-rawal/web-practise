import React from 'react';
import ReactDOM from 'react-dom';
import { Col, Alert } from 'react-bootstrap';

require('../stylesheets/main.scss');
require('../stylesheets/main.scss');
require('bootstrap-sass/assets/stylesheets/_bootstrap.scss');

class AppComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <Col md={8}>
                    <p>Hello Karan</p>
                </Col>
                <Col md={4}>
                    <p>Hello Karan 2</p>
                    <Alert bsStyle="danger">KAran I love you</Alert>
                </Col>
            </div>
        );
    }
}

ReactDOM.render(<AppComponent />, document.getElementById("root"));