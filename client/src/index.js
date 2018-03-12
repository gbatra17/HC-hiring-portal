import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactFilestack from 'filestack-react';
import env from '../.frontendenv.js';

class App extends Component {
  render() {
    return ( <div>
      <ReactFilestack apikey = {env.FILEPICKER_API_KEY}
      buttonText = "Click me"
      buttonClass = "classname"/>
      <h2 > Hiring portal for HolaCode students < /h2>
      <h3 > Made using FileStack < /h3> <
      /div>);
    }
  }

  ReactDOM.render( < App / > , document.getElementById('root'));
