var React = require('react');

var TorqueSlide = React.createClass({
  render() {
    if(this.props.hidden) {
      return <span />
    }
    var children;
    if(typeof this.props.children === 'string') {
      children = <p>{this.props.children}</p>;
    } else {
      children = this.props.children;
    }
    var element = React.cloneElement(children, {
      ref: 'content'
    });
    return <div>{ element }</div>;
  },

  onVisible() {
    (this.refs.content.handleVisible || Function)();
  }
});

module.exports = TorqueSlide;
