const express = require('express');
const router = express.Router();
const { Client } = require('../db');

// GET / candidate route that responds with HTML form
router.get('/', async (req, res) => {
	try {
		const candidates = await Client.findAll()
		res.send(candidates);
	} catch (error) {
		console.log('there is an error here')
	}
});


// POST / candidate
router.post('/', async (req, res, next) => {
	try {
        const newCandidate = await Client.create(req.body)
		res.json(newCandidate)
	} catch (error) {
		next(error);
	}
});




module.exports = router;
