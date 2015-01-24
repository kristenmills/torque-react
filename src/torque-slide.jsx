var React = require('react');

var TorqueSlide = React.createClass({
  render: function() {
    return <div>{ this.props.children }</div>;
  }
});

module.exports = TorqueSlide;
