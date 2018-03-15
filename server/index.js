const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 8080;
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

//catch all to handle routes so refresh is enabled on the front-end
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
})

app.listen(port, () => {
  console.log(`Express server started on port: ${port}`);
});
