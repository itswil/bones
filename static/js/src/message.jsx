import React from 'react';

export default class Message extends React.Component {
  render() {
    return (
      <div className="react-message">
        <p>React successful</p>
        <p>This comes from message.jsx called from main.js</p>
      </div>
    );
  }
};
