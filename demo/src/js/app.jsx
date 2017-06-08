import React, { Component } from 'react';
import { render } from 'react-dom';
import TorqueSlides from '../../../src';

const Application = () => (
  <TorqueSlides duration={2} keyboardInteractive={true} >
    <p>Wow!</p>
    <p>Check out</p>
    <p>My Cool</p>
    <p>Unstyled</p>
    <p>Torque slides!</p>
  </TorqueSlides>
);


render(<Application />, document.getElementById('app'));
