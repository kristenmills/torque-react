var React = require('react');

var TorqueSlide = React.createClass({
  render: function() {
    return <div>{ this.props.children }</div>;
  },

  onVisible: function() {
    (this.props.children.handleVisible || Function)();
  },

  onHidden: function() {
    (this.props.children.handleHidden || Function)();
  }
});

module.exports = TorqueSlide;
