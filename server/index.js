const express = require('express');
const app = express();
const path = require('path');
const { dbConnection } = require('./db');
const candidateRouter = require('./routes/candidate');
const PORT = 8080;

const startServer = async () => {
	dbConnection.sync();
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
};

startServer();

app.use(express.static(path.join(__dirname, '../public')));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
}); // Send index.html for any other requests

app.use('/candidate', candidateRouter);
