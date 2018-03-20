import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PrimaryLayout from './components/PrimaryLayout.jsx'

// - Add notification that job sent!
// - Add notification each time there's a new job
// - Add social media handles for HC
// - Add authorization for company vs student

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <MuiThemeProvider >
        <PrimaryLayout />
      </MuiThemeProvider>
    </BrowserRouter>);
    }
  }

  ReactDOM.render( <App / > , document.getElementById('root'));
