import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

const styles = {
  textstyle: {
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: 15,
  },
  phantomStyle: {
    display: 'block'
  },
  appStyle:{
    position: 'fixed',
    left: 0,
    bottom: 0,
  }
}

const About = () => (
  <div>
      <div style={styles.phantomStyle} />
        <AppBar title="HolaCode is a 5 month immersive software engineering bootcamp
        focused on creating better life opportunities. For questions/help, please email: scott@holacode.com" titleStyle={styles.textstyle} style={styles.appStyle} showMenuIconButton={false}>
        </AppBar>
  </div>

);

export default About;
