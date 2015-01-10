var React = require('React');

var TorqueSlides = React.createClass({
  getInitialState: function() {
    return {
      countdown: this.props.children[0].props.duration || this.props.duration,
      current: 0
    };
  },
  coponentDidMount: function() {
    var _this = this;
    setInterval(function(){
      _this.updateSlide();
    }, 1000);
  },
  render: function() {
    return <div>{ this.props.children }</div>;
  },

  updateSlide: function() {
    if(this.state.countdown === 0) {
      var old = this.props.children[this.state.current];
      old.setProps({
        hidden: true
      });
      this.setState({
        current: (this.state.current + 1) % this.props.children.length
      });
      var current = this.props.children[this.state.current];
      this.setState({
        countdown: current.props.duration || this.props.duration
      });
      current.setProps({
        hidden: false
      });
    } else {
      this.setState({
        countdown: this.state.countdown - 1
      });
    }
  }
});

module.exports = TorqueSlides;
