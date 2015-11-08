var React = require('react');

var ReactLogo = React.createClass({
  render: function(){
    return (
      <div className="react-logo">
        <p>React successful</p>
        <p>This comes from react-logo.jsx called from main.js</p>
      </div>
    );
  }
});

module.exports = ReactLogo;
