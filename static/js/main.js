var ConsoleLogger = require('./src/console-logger');

ConsoleLogger.init();

var React = require('react');
var ReactDOM = require('react-dom');

var Message = require('./src/message.jsx');

ReactDOM.render(
  <Message/>, document.getElementById('react-message'));
