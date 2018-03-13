import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const About = () => (
  <div><Paper style={style} zDepth={1}><h2 > About Us </h2></Paper></div>
);

export default About;
