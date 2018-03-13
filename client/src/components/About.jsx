import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
  height: 500,
  width: 500,
  margin: 'auto',
  textAlign: 'center',
  display: 'inline-block'
};

const About = () => (
  <div><Paper style={style} zDepth={1}>
  <h2 > HolaCode is a 5 month immersive software engineering bootcamp
focused on creating better life opportunities.
Visit us at <a href="www.holacode.com">HolaCode</a></h2>
<h3>Hiring portal made by: Garima Batra</h3>
</Paper></div>
);

export default About;
