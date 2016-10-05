var React = require('react/addons');
const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;

var TorqueSlides = React.createClass({

  componentWillMount() {
    this.intervals = [];
  },

  setInterval() {
    this.intervals.push(setInterval.apply(null, arguments));
  },

  componentWillUnmount() {
    this.intervals.map(clearInterval);
    document.removeEventListener('keydown', this.keydown, false);
  },

  getInitialState() {
    var children;
    if(this.props.children.length == undefined) {
      children = [this.props.children];
    } else {
      children = this.props.children;
    }

    if (this.props.keyboardInteractive) {
      document.addEventListener('keydown', this.keydown, false);
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

  keydown(e) {
    switch (e.keyCode) {
      case RIGHT_ARROW:
        this.updateSlideTo((this.state.current + 1) % this.props.children.length);
        break;
      case LEFT_ARROW:
        this.updateSlideTo(this.state.current - 1 < 0 ? this.props.children.length - 1: this.state.current - 1);
        break;
    }
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

  updateSlideTo(index) {
    var newCurrentObj = this.refs['slide-' + index];
    this.setState({
      current: index,
      countdown: newCurrentObj.props.duration || this.props.duration
    }, newCurrentObj.onVisible);
  },

  updateSlide() {
    if(this.state.countdown === 0) {
      this.updateSlideTo((this.state.current + 1) % this.props.children.length);
    } else {
      this.setState({
        countdown: this.state.countdown - 1
      });
    }
  }
});

module.exports = TorqueSlides;
