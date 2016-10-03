var React = require('react');

var torque = require('../../../');
var TorqueSlides = torque.TorqueSlides;
var TorqueSlide = torque.TorqueSlide;

var Application = React.createClass({
  render: function() {
    return (
      <TorqueSlides duration={2} keyboardInteractive={true} >
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


React.render(<Application />, document.getElementById('app'));
