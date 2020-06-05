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
 
// going to the '/' route and sending the string 'Hello - I like pizza'
// app.get('/', function (request, response) {
//   response.send('Hello - I like pizza')
// })

// app.get('/bananas', (request, response) => {
//   response.send('I am bananas about bananas');
// })
 
// turn on server and console log the port
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})

// app.listen(3000); // I think use this without .env file