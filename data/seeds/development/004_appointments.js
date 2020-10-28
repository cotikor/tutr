const faker = require("faker");

const create = () => ({
	date: faker.date.future(1),
	student_id: faker.random.number({ min: 1, max: 9 }),
	subject: faker.hacker.ingverb(),
});

exports.seed = async function (knex, Promise) {
	const appointments = [];

	for (let i = 0; i < 20; i++) {
		appointments.push(create(i));
	}

	await knex.raw("TRUNCATE TABLE appointments RESTART IDENTITY CASCADE");
	await knex("appointments").insert(appointments);
};
