import React, { Component } from 'react';
import ReactFilestack from 'filestack-react';
import Paper from 'material-ui/Paper';
import filestack from 'filestack-js';

const client = filestack.init('Ad1MIL2M5QlOyxEKYeO9Yz');

export default class AddJob extends Component {

  constructor (props) {
    super(props);
    this.state = {
      url: null,
      metadata: null
    };
    this.uploadDoc = this.uploadDoc.bind(this);
    this.setDoc = this.setDoc.bind(this);
    this.getMetadata = this.getMetadata.bind(this);
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

  //Your Company Name
  //Your Name
  //Phone
  //How did you hear about us?
  //Job Title
  //Location
  //Document
  //What type of job is it? Full-time, part-time, temporary, contract, internship, commision, contract
  render () {
    const { url, metadata } = this.state;
    return (
      <div className="container">
        <div className="page-header">
          <h1>Upload Files</h1>
        </div>
        <div className="row">
          <div className="text-center">
            <button
              type="button"
              onClick={this.setDoc}
            >
              <i className="glyphicon glyphicon-upload" /> Upload Document
            </button>

          </div>
        </div>
      </div>
    );
  }
}
;
