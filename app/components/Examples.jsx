var React = require('react');
var {Link} = require('react-router');

var Examples = (props) =>
<div>
  <h1 className="text-center page-title">Examples</h1>
  <p>Here are a few sample locations to try out:</p>
  <ol>
    <li><Link to="/?location=Jesteburg">Jesteburg, Germany</Link></li>
    <li><Link to="/?location=Rio">Rio, Brazil</Link></li>
    <li><Link to="/?location=Madison">Madison, MN</Link></li>
  </ol>
  </div>;

module.exports = Examples;
