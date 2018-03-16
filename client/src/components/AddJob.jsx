import React, { Component } from 'react';
import ReactFilestack from 'filestack-react';
import filestack from 'filestack-js';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {lightBlue300} from 'material-ui/styles/colors';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';

const client = filestack.init('Ad1MIL2M5QlOyxEKYeO9Yz');

//'Ad1MIL2M5QlOyxEKYeO9Yz'

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
      codingChallenge: 1
    };
    this.uploadDoc = this.uploadDoc.bind(this);
    this.setDoc = this.setDoc.bind(this);
    this.getMetadata = this.getMetadata.bind(this);
    this.postJob = this.postJob.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCompanyName = this.handleCompanyName.bind(this);
    this.handleJobTitle = this.handleJobTitle.bind(this);
  }

  setDoc = () => {
    this.uploadDoc()
      .then(data => {
        const { url, handle } = data.filesUploaded[0];
        this.setState({ url });
        this.getMetadata(handle);
        console.log(JSON.stringify(data.filesUploaded));
      })
      .catch(err => console.log(err));
  }

  getMetadata = (handle) => {
    client.metadata(handle)
      .then(metadata => console.log(metadata))
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

  postJob = () => {
    axios.post('/newjob', {
      companyName: this.state.companyName,
      jobName: this.state.jobName,
      codingChallenge: this.state.codingChallenge
    })
    .then(() => {
      console.log("Job posted!")
    })
  }

  handleChange = (e, index, value) => this.setState({codingChallenge: value});
  handleCompanyName = (e) => this.setState({companyName: e.target.value});
  handleJobTitle = (e) => this.setState({jobTitle: e.target.value})

  //Your Company Name
  //Your Name
  //Phone
  //How did you hear about us?
  //Job Title
  //Location
  //Document
  //What type of job is it? Full-time, part-time, temporary, contract, internship, commision, contract
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
          <RaisedButton label="Post Job" secondary={true} style={styles.buttonStyle} onClick={this.postJob}/>
        </CardActions>
    </Card>
    );
  }
}
;
