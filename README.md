torque-react
======

A React based automated slide show.

## Usage

In you project directory run

```
npm install --save torque-react
```

And you should be ready to go

### [Example](http://kristen-mills.com/torque-react/)
```javascript
var React = require('react');

var torque = require('torque-react');
var TorqueSlides = torque.TorqueSlides;
var TorqueSlide = torque.TorqueSlide;

var Application = React.createClass({
  render: function() {
    return (
      <TorqueSlides duration={1} >
        <TorqueSlide duration={6}>
          Wow!
        </TorqueSlide>
        <TorqueSlide>
          Check out
        </TorqueSlide>
        <TorqueSlide>
          My Cool
        </TorqueSlide>
        <TorqueSlide>
          Unstyled
        </TorqueSlide>
        <TorqueSlide>
          Torque slides!
        </TorqueSlide>
      </TorqueSlides>
    );
  }
});
```

### Overview
The above example is relatively simple. But just to explain some of the features:

Torques slides transition in order starting with the first `torque-slide`. When it get's to the end, it will go back to the beginnning. `duration` is specified in seconds at the `torque-slides` level but can be overiddden at the `torque-slide` level.

Something not really shown in the example, it is really easy to performa actions when the slide is made visible. If your react component has a function defined `handleVisible`, it will be called when the component is made visible

**application.jsx**

```javascript
var Application = React.createClass({
  render: function() {
    return (
      <TorqueSlides duration={1} >
        <TorqueSlide duration={6}>
          <MySlideData />
        </TorqueSlide>
      </TorqueSlides>
    );
  }
});
```

**my-slide-data.jsx**

```javascript
var MySlideData = React.createClass({
  handleVisible: function() {

  },

  render: function() {

  }
});
```

That's about it.
