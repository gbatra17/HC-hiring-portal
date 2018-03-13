import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import {cyan500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


const toolbarStyle = {
  backgroundColor: cyan500
}

const style = {
  fontFamily: 'Montserrat',
  color: 'white'
};

class Header extends Component {
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
  <Toolbar style={toolbarStyle}>
    <ToolbarGroup>
    <IconButton onClick={this.handleToggle} tooltip="Menu" tooltipPosition="bottom-center"><ActionHome /></IconButton>
      <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
          <MenuItem onClick={this.handleClose}>Post A Job</MenuItem>
          <MenuItem onClick={this.handleClose}>About Us</MenuItem>
          <MenuItem onClick={this.handleClose}>Look For Jobs</MenuItem>
        </Drawer>
    </ToolbarGroup>
    <ToolbarTitle text="HolaCode Hiring Portal" style={style} />
    <img src="footer_logo.png" height="40" width="40" />
  </Toolbar>
)
}
};

export default Header;
