var React = require('react');

var TorqueSlide = React.createClass({
  getDefaultProps: function() {
    return {
      hidden: true
    };
  },
  render: function() {
    if(this.props.hidden) {
      return <span />;
    }
    return <div>{ this.props.children }</div>;
  }
});

module.exports = TorqueSlide;
