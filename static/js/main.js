import ConsoleLogger from './src/console-logger';

ConsoleLogger.init();

import React from 'react';
import ReactDOM from 'react-dom';

import Message from './src/message.jsx';

ReactDOM.render(<Message/>, document.getElementById('react-message'));
