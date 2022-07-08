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

//GET / candidate route that responds with candidate information that matches search
// router.get('/', async (req, res, next) => {});


// POST / candidate
router.post('/', async (req, res, next) => {
	try {
		console.log(req.body);
		const client = req.body.client
		const poc = req.body.poc
		const email = req.body.email
		const role = req.body.role
		const urgency = req.body.urgency
		const quantity = req.body.urgency
		const skillsNeeded = req.body.skillsNeeded

        const newCandidate = await Client.create({
			Client: client,
			POC: poc,
			Email: email,
			Role: role,
			Urgency: urgency,
			Quantity: quantity,
			SkillsNeeded: skillsNeeded
		})
		console.log(newCandidate)
		res.json(newCandidate)
	} catch (error) {
		next(error);
	}
});




module.exports = router;
