var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
	companyName: String,
  jobTitle: String,
  codingChallenge: Number
})

var Job = mongoose.model('Job', jobSchema);

module.exports = Job;
