const { dbConnection, Client } = require('./index');

const runSeed = async () => {
	try {
		await dbConnection.sync({ force: true });

		const maria = await Client.create({
			Client: 'PwC',
			POC: 'Maria Rodriguez',
			Email: 'M.RD43@datapipertech.com',
			Role: 'Core Senior Software Developer - Senior Associate',
			Urgency: 'High',
			Quantity: 1,
			SkillsNeeded:
				'Java, Springboot Docker/Kubernetes, API/microservices/Cloud',
		});

		const robert = await Client.create({
			Client: 'PwC',
			POC: 'David Smith',
			Email: 'DavidS_33@datapipertech.com',
			Role: 'Zendesk Developer',
			Urgency: 'Med',
			Quantity: 1,
			SkillsNeeded: 'Zendesk Developer',
		});

		console.log(`Seeding is complete`);
		process.kill(0);
	} catch (error) {}
};

runSeed();
