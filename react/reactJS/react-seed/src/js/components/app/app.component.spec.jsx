// __tests__/CheckboxWithLabel-test.js

import React from 'react';
import { shallow } from 'enzyme';
import App from './app.component';

describe('App', () => {
  it('Should render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });
});
