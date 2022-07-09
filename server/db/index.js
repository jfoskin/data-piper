const Sequelize = require('sequelize');
const pkg = require('../../package.json');
const chalk = require('chalk');

const dbName = process.env.NODE_ENV === 'test' ? `${pkg.name}_test` : pkg.name;
console.log(chalk.yellow(`Opening database connection to ${dbName}`));

const dbConnection = new Sequelize( process.env.DATABASE_URL||`postgres://localhost:5432/${dbName}`, {
	logging: false,
});


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
		type: Sequelize.INTEGER,
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