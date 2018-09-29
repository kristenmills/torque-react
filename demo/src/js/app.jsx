import React, { Component } from 'react';
import { render } from 'react-dom';
import TorqueSlides, { TorqueSlide } from '../../../src';

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
