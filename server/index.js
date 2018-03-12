const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 8080;
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => {
  console.log(`Express server started on port: ${port}`);
});
