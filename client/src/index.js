import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header.jsx'

// const muiTheme = getMuiTheme({
//   toolBar: {
//     height: 50,
//     backgroundColor: cyan500
//   },
// });

// Todo:
// -Add routing for posting
// -Add table for forum
// -clicking on title leads to home route
// -Figure out Filepicker functionality and add form with details to apply

class App extends Component {
  render() {
    return (
      <MuiThemeProvider >
      <Header />
      </MuiThemeProvider>);
    }
  }

  ReactDOM.render( <App / > , document.getElementById('root'));
