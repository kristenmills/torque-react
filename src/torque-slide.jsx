var React = require('react');

var TorqueSlide = React.createClass({
  render: function() {
    if(this.props.hidden) {
      return <span />;
    }

    return { this.props.children };
  }
});

module.exports = TorqueSlide;
