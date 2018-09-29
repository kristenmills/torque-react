# torque-react

A React based automated slide show.

## Usage

In you project directory run

```
npm install --save torque-react
```

And you should be ready to go

### [Example](http://kristen-mills.com/torque-react/)
```javascript
import React, { Component } from 'react';
import { render } from 'react-dom';
import TorqueSlides, { TorqueSlide } from 'torque-react';

const Application = () => (
  <TorqueSlides duration={2} keyboardInteractive={true} >
    <TorqueSlide duration={5}>
      <p>Wow!</p>
    </TorqueSlide>
    <p>Check out</p>
    <p>My Cool</p>
    <p>Unstyled</p>
    <p>Torque slides!</p>
  </TorqueSlides>
);


render(<Application />, document.getElementById('app'));
```

Wanna use the arrow keys to navigate faster? Use the `keyboardInteractive` prop.
```
<TorqueSlides duration={2} keyboardInteractive={true} >
```

### Overview
The above example is relatively simple. But just to explain some of the features:

Torques slides transition in order starting with the first child. When it get's to the end, it will go back to the beginning. `duration` is specified in seconds!

Something not really shown in the example, it is really easy to performa actions when the slide is made visible. Just define a `componentDidMount` on the slide!

Also not shown here is the ablity to supply a type to the `TorqueSlides` component in order to control what it renders as (default is a div). This can be used to easily add animations by supplying `CSSTransitionGroup` and the props needed to `TorqueSlides`.

The `TorqueSlide` component is optional. It does nothing but render it's children.  It can be convenient to use if specifying a duration override but technically the following example is equivalent to the example above but might cause propType warnings.

```
const Application = () => (
  <TorqueSlides duration={2} keyboardInteractive={true}>
    <p duration={5}>Wow!</p>
    <p>Check out</p>
    <p>My Cool</p>
    <p>Unstyled</p>
    <p>Torque slides!</p>
  </TorqueSlides>
);
```

That's about it.
