var React = require('react/addons');

var TorqueSlides = React.createClass({

  componentWillMount: function() {
    this.intervals = [];
  },

  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },

  componentWillUnmount: function() {
    this.intervals.map(clearInterval);
  },

  getInitialState: function() {
    return {
      countdown: this.props.children[0].props.duration || this.props.duration,
      current: 0
    };
  },

  componentDidMount: function() {
    this.refs['slide-0'].onVisible();
    this.setInterval(this.updateSlide, 1000)
  },

  render: function() {
    var _this = this;
    var children = React.Children.map(this.props.children, function (child, index) {
      return React.addons.cloneWithProps(child, {
        ref: 'slide-' + (index),
        hidden: _this.state.current !== index
      });
    });
    return <div> { children } </div>;
  },

  updateSlide: function() {
    if(this.state.countdown === 0) {
      var oldCurrentObj = this.refs['slide-' + this.state.current];
      var newCurrent = (this.state.current + 1) % this.props.children.length;
      var newCurrentObj = this.refs['slide-' + newCurrent];

      this.setState({
        current: newCurrent,
        countdown: newCurrentObj.props.duration || this.props.duration
      }, newCurrentObj.onVisible);

    } else {
      this.setState({
        countdown: this.state.countdown - 1
      });
    }
  }
});

module.exports = TorqueSlides;
