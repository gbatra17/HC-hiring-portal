const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 8080;
const path = require('path');
const Job = require('../database/job')
const db = require('../database/config')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/newjob', (req, res) => {
  Job.create({
			companyName : req.body.companyName,
      jobTitle: req.body.jobTitle,
      codingChallenge: req.body.codingChallenge
		}, (err, job) => {
			if(err){
				res.send(err);
			}
			Job.find((err, jobs) => {
				if(err){
					res.send(err);
				}
			res.json(jobs);
		});
	});
});

app.get('/newjob', function(req, res) {
		Job.find(function(err, jobs) {
			if(err){
				res.send(err);
			}
      console.log(jobs);
			res.json(jobs);
		});
});

//catch all to handle routes so refresh is enabled on the front-end
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
})

app.listen(port, () => {
  console.log(`Express server started on port: ${port}`);
});
