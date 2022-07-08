const express = require('express');
const app = express();
const path = require('path');
const volleyball = require('volleyball')

const debug = process.env.NODE_ENV === 'test';
app.use(volleyball.custom({ debug }));

app.use(express.static(path.join(__dirname, '../public')));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api', require('./api'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
}); // Send index.html for any other requests

// error handling endware
app.use((err, req, res, next) => {
	console.error(err)
	console.error(err.stack)
	res.status(err.status || 500).send(err.message || 'Internal server error.')
  })

  module.exports = app;