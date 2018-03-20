var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
	companyName: String,
  jobTitle: String,
  codingChallenge: Number,
	url: String,
	todaysDate: String
})

var Job = mongoose.model('Job', jobSchema);

module.exports = Job;
