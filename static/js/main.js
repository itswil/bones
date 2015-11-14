var consoleLogger = require('./src/consoleLogger');

consoleLogger.init();

var React = require('react');
var ReactDOM = require('react-dom');

var ReactLogo = require('./src/react-logo.jsx');

ReactDOM.render(
  <ReactLogo/>, document.getElementById('react-logo-wrap'));
