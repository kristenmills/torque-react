var React = require('react/addons');

var TorqueSlides = React.createClass({

  componentWillMount() {
    this.intervals = [];
  },

  setInterval() {
    this.intervals.push(setInterval.apply(null, arguments));
  },

  componentWillUnmount() {
    this.intervals.map(clearInterval);
  },

  getInitialState() {
    var children;
    if(this.props.children.length == undefined) {
      children = [this.props.children];
    } else {
      children = this.props.children;
    }
    return {
      countdown: children[0].props.duration || this.props.duration,
      current: 0
    };
  },

  componentDidMount() {
    this.refs['slide-0'].onVisible();
    this.setInterval(this.updateSlide, 1000);
  },

  render() {
    var children = React.Children.map(this.props.children, (child, index) => {
      return React.addons.cloneWithProps(child, {
        ref: 'slide-' + (index),
        hidden: this.state.current !== index
      });
    });
    return <div> { children } </div>;
  },

  updateSlide() {
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
