'use strict';

// bring in express library
const express = require('express');

// initalize express library into app
const app = express();

// gets variables from .env file
require('dotenv').config();

// tell express to serve files from public folder
app.use(express.static('./public'));

const PORT = process.env.PORT;
 
// turn on server and console log the port
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
})
