import PropTypes from 'prop-types';
import React, { Component, Children } from 'react';

const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;

class TorqueSlides extends Component {
  static propTypes = {
    type: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    children: PropTypes.node.isRequired,
    duration: PropTypes.number.isRequired,
  };

  static defaultProps = {
    type: 'div',
  };

  constructor() {
    super();

    this.timeout = null;
  }

  state = {
    currentSlide: 0,
  };

  componentDidMount() {
    if (this.props.keyboardInteractive) {
      document.addEventListener('keydown', this.keydown, false);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keydown, false);
  }

  nextSlide = () => {
    if (Children.count(this.props.children) <= (this.state.currentSlide + 1)) {
      this.setState({
        currentSlide: 0,
      });
    } else {
      this.setState({
        currentSlide: this.state.currentSlide + 1,
      });
    }
  };

  prevSlide = () => {
    if (this.state.currentSlide === 0) {
      this.setState({
        currentSlide: Children.count(this.props.children) - 1,
      });
    } else {
      this.setState({
        currentSlide: this.state.currentSlide - 1,
      });
    }
  };

  keydown = (e) => {
    switch (e.keyCode) {
      case RIGHT_ARROW:
        this.nextSlide();
        break;
      case LEFT_ARROW:
        this.prevSlide();
        break;
    }

  };

  render() {
    const {
      type,
      duration,
      children,
      keyboardInteractive, // unused
      ...props
    } = this.props;

    if (this.timeout !== null) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
      this.nextSlide();
    }, duration * 1000);

    return React.createElement(
      type,
      props,
      Children.toArray(children)[this.state.currentSlide],
    );
  }
}

export default TorqueSlides;
