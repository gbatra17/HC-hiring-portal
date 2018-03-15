import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import AddJob from './AddJob.jsx'
import Footer from './Footer.jsx'
import TableView from './Table.jsx'

import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import {cyan500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

const toolbarStyle = {
  backgroundColor: cyan500
}

const paperStyle = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const linkStyle = {
  textDecoration: 'none'
}

const style = {
  fontFamily: 'Montserrat',
  color: 'white'
};

class PrimaryLayout extends Component {
  constructor(props) {
     super(props);
     this.state = {open: false};
     this.handleToggle = this.handleToggle.bind(this);
     this.handleClose = this.handleClose.bind(this);
   }

   handleToggle(){
     this.setState({open: !this.state.open});
   }

   handleClose(){
     this.setState({open: false});
   }

  render() {
    return (
      <div>
  <Toolbar style={toolbarStyle}>
    <ToolbarGroup>
    <IconButton onClick={this.handleToggle} tooltip="Menu" tooltipPosition="bottom-center"><MenuIcon /></IconButton>
      <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
          <Link to="/postjob" style={linkStyle}><MenuItem onClick={this.handleClose}>Post A Job</MenuItem></Link>
          <Link to="/" style={linkStyle}><MenuItem onClick={this.handleClose}>Look For Jobs</MenuItem></Link>
        </Drawer>
    </ToolbarGroup>
    <Link to="/" style={linkStyle}><ToolbarTitle text="HolaCode Hiring Portal" style={style} /></Link>
    <img src="footer_logo.png" style={{marginTop: 8}} height="40" width="40" />
  </Toolbar>

  <Route path="/postjob" component={AddJob} />
  <Route exact path="/" component={TableView} />

  <Footer />
  </div>
)
}
};

export default PrimaryLayout;
