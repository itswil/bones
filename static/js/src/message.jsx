var React = require('react');

var MessageComponent = React.createClass({render: function() {
    return (
      <div className="react-message">
        <p>React successful</p>
        <p>This comes from message.jsx called from main.js</p>
      </div>
    );
  }
});

module.exports = MessageComponent;
