import React, { Component } from 'react';
import ReactFilestack from 'filestack-react';
import filestack from 'filestack-js';
import axios from 'axios';

import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';
import {lightBlue300} from 'material-ui/styles/colors';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const client = filestack.init(process.env.FILEPICKER_API_KEY);

const styles ={
  cardStyle: {
    margin: '0 auto',
    width: '30%',
    marginTop: 10,
    textAlign: 'center'
  },
  errorStyle:{
    color: lightBlue300
  },
  textStyle: {
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: 15,
    textAlign: 'left'
  },
  buttonStyle: {
    marginTop: 10
  }
}

export default class AddJob extends Component {

  constructor (props) {
    super(props);
    this.state = {
      url: null,
      metadata: null,
      companyName: '',
      jobTitle: '',
      todaysDate: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
      codingChallenge: 1,
      open: false
    };
    this.uploadDoc = this.uploadDoc.bind(this);
    this.setDoc = this.setDoc.bind(this);
    this.postNewJob = this.postNewJob.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCompanyName = this.handleCompanyName.bind(this);
    this.handleJobTitle = this.handleJobTitle.bind(this);
  }

  setDoc = () => {
    this.uploadDoc()
      .then(data => {
        const { url, handle } = data.filesUploaded[0];
        this.setState({ url });
      })
      .catch(err => console.log(err));
  }

  uploadDoc = () => {
    return client.pick(
      {
        accept: ['.docx', '.html', '.jpg', '.odt', '.pdf', '.png', '.svg', '.txt', '.webp'],
        allowManualRetry: true
      }
    );
  };

  postNewJob = () => {
    this.props.postJob(this.state.companyName, this.state.jobTitle, this.state.codingChallenge, this.state.url, this.state.todaysDate)
      this.setState({
        companyName: '',
        jobTitle: '',
        codingChallenge: '',
        open: true
      })
  }

  handleRequestClose = () => this.setState({open: false});
  handleChange = (e, index, value) => this.setState({codingChallenge: value});
  handleCompanyName = (e) => this.setState({companyName: e.target.value});
  handleJobTitle = (e) => this.setState({jobTitle: e.target.value})

  render () {
    return (
      <Card style={styles.cardStyle}>
        <CardHeader
      title="Post A Job"
      style={styles.textStyle}
    />
  <TextField
        hintText="Your Company Name"
        errorText="This field is required"
        errorStyle={styles.errorStyle}
        value={this.state.companyName}
        onChange={this.handleCompanyName}
      />
    <TextField
          hintText="Job Title"
          errorText="This field is required"
          errorStyle={styles.errorStyle}
          value={this.state.jobTitle}
          onChange={this.handleJobTitle}
      />
      <SelectField
        floatingLabelText="Coding Challenge"
        value={this.state.codingChallenge}
        onChange={this.handleChange}
          >
            <MenuItem value={1} primaryText="Yes" />
            <MenuItem value={2} primaryText="No" />
      </SelectField>
    <CardActions>
          <RaisedButton label="Upload Job Description" primary={true} onClick={this.setDoc}/>
          <br></br>
          <RaisedButton label="Post Job" secondary={true} style={styles.buttonStyle} onClick={this.postNewJob}/>
        </CardActions>
        <Snackbar
            open={this.state.open}
            message="This job was posted!"
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
          />
    </Card>
    );
  }
}
;
