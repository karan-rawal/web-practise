const jsdom = require('jsdom');

const dom = new jsdom.JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;
global.navigator = {
  userAgent: 'node.js',
};
