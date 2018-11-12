'use strict';

// Load array of notes
const express = require('express'); 
const data = require('./db/notes');
const app = express();

// ADD STATIC SERVER HERE

app.listen(8080, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});

console.log('Hello Noteful!');

// INSERT EXPRESS APP CODE HERE...
