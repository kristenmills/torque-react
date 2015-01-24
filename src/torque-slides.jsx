var React = require('React');

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
    this.setInterval(this.updateSlide, 1000)
  },

  render: function() {
    return <div>{ this.props.children[this.state.current] }</div>;
  },

  updateSlide: function() {
    if(this.state.countdown === 0) {
      var oldCurrentObj = this.props.children[this.state.current];
      var newCurrent = (this.state.current + 1) % this.props.children.length;
      var newCurrentObj = this.props.children[newCurrent];

      newCurrentObj.onVisible();

      this.setState({
        current: newCurrent,
        countdown: newCurrentObj.props.duration || this.props.duration
      });

      oldCurrentObj.onHidden();

    } else {
      this.setState({
        countdown: this.state.countdown - 1
      });
    }
  }
});

module.exports = TorqueSlides;
