const faker = require("faker");

const create = () => ({
	datetime: faker.date.between('2020-05-31', '2020-8-31'),
	student_id: faker.random.number({ min: 1, max: 9 }),
	subject_id: faker.random.number({ min: 1, max: 19 }),
	note_id: faker.random.number({ min: 1, max: 99 }),
});

exports.seed = async function (knex, Promise) {
	const appointments = [];

	for (let i = 0; i < 20; i++) {
		appointments.push(create(i));
	}

	await knex.raw("TRUNCATE TABLE appointments RESTART IDENTITY CASCADE");
	await knex("appointments").insert(appointments);
};
