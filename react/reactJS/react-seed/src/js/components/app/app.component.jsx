import React from 'react';
import './app.component.scss';

const sampleImage = require('../../../assets/images/sample.png');

const App = () => (
  <div
    className="app"
    test="asdf"
    >
    hello world
    <img
      alt="sample"
      src={sampleImage}
      />
  </div>
);

export default App;
