import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PrimaryLayout from './components/Header.jsx'
import AddJob from './components/AddJob.jsx'

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
      <BrowserRouter>
      <MuiThemeProvider >
        <Switch>
        <Route exact path="/" component={PrimaryLayout} />
        <Route path="/postjob" component={AddJob} />
        <Route path="/about" component={Topics} />
        <Route path="/forum" component={PrimaryLayout} />
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>);
    }
  }

  ReactDOM.render( <App / > , document.getElementById('root'));
