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
			Quantity: '1',
			SkillsNeeded: 'Java, Springboot Docker/Kubernetes, API/microservices/Cloud',
		})

		console.log(`Seeding is complete`);
		process.kill(0);
	} catch (error) {
		
	}
};

runSeed();
