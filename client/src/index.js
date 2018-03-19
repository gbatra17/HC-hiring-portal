import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PrimaryLayout from './components/PrimaryLayout.jsx'

// Todo:
// -add external link to HolaCode
// -Add table for forum that is updated with filepicker data and preview/download buttons

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
