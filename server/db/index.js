const Sequelize = require('sequelize');

const dbConnection = new Sequelize(`postgres://localhost:5432/data-piper`);


const Client = dbConnection.define('Client', {
	Client: {
		type: Sequelize.STRING(50),
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	POC: {
		type: Sequelize.STRING,
        allowNull: false,
        validate: {
			notEmpty: true,
		},
	},
	Email: {
		type: Sequelize.STRING,
		validate: {
			isEmail: true,
            notEmpty: true
		},
	},
	Role: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	Urgency: {
		type: Sequelize.ENUM(['High', 'Med', 'Low']),
		allowNull: false,
		defaultValue: 'High',
		validate: {
			isIn: [['High', 'Med', 'Low']],
		},
	},
    Quantity: {
		type: Sequelize.FLOAT,
		defaultValue: 1,
		validate: {
			min: 0,
			max: 100,
		},
    },
	SkillsNeeded:{
		type: Sequelize.TEXT,
		allowNull: false,
	}
})
	module.exports = {
		dbConnection,
		Client
	};