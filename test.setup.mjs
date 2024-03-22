import { JSDOM } from 'jsdom';
import * as React from 'react';

const dom = new JSDOM();

global.window = dom.window;
global.document = dom.window.document;

global.navigator = global.navigator || {};
global.navigator.userAgent = 'node.js';
global.React = React;
