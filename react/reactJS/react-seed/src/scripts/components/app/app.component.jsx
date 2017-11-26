import React from 'react';
import '../../../styles/app.component.scss';

const sampleImage = require('../../../assets/images/sample.png');

const App = () => (
  <div
    className="container app"
    test="asdf"
    >
    hello world
    <span className="glyphicon glyphicon-plus" />
    <img
      alt="sample"
      src={sampleImage}
      />
  </div>
);

export default App;
