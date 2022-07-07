const express = require('express');
const router = express.Router();
const { Client } = require('../db');

// GET / candidate route that responds with HTML form
router.get('/', (req, res) => {
	res.send('this will be our form to enter candidate information');
});

//GET / candidate route that responds with candidate information that matches search
router.get('/', async (req, res, next) => {});


// POST / candidate
router.post('/', async (req, res, next) => {
	try {
		console.log(req.body);
        const newCandidate = await Client.create(req.body)
		console.log(newCandidate)
	} catch (error) {
		next(error);
	}
});

module.exports = router;
