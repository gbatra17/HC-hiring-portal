var mongoose = require('mongoose');

var uri = process.env.MONGODB_URI;

mongoose.Promise = global.Promise

mongoose.connect(uri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log('Mongodb connection open');
});

module.exports = db;
