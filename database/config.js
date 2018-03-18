var mongoose = require('mongoose');

var uri = 'mongodb://heroku_czfcdzwq:g4baij6134kr1d72ns2slbeeol@ds115569.mlab.com:15569/heroku_czfcdzwq';

mongoose.Promise = global.Promise

mongoose.connect(uri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log('Mongodb connection open');
});

module.exports = db;
