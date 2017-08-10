import React from 'react';
import expect from 'expect';
import AppComponent from './App.Component';
import { renderIntoDocument } from 'react-dom/test-utils';

describe('AppComponent', () => {
  it('Should render', () => {
    const item = renderIntoDocument(<div>
      <AppComponent />
    </div>);

    expect(item).toExist();
  });
});
