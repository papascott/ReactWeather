var React = require('react');
var {Link} = require('react-router');

var About = (props) =>
<div>
  <h1 className="text-center">About</h1>
  <p>This is a weather application built on React for The Complete React Web App Developer Course.</p>
  <ul>
    <li><a href="https://facebook.github.io/react">React</a></li>
    <li><a href="http://openweathermap.org">Open Weather Map</a></li>
  </ul>
</div>;


module.exports = About;
