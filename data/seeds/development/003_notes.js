const faker = require("faker");

const create = () => ({
	details: faker.lorem.sentence(50),
	student_id: faker.random.number({ min: 1, max: 9 }),
	updatedAt: faker.date.past(1)
});

exports.seed = async function (knex, Promise) {
	const notes = [];

	for (let i = 0; i < 100; i++) {
		notes.push(create());
	}

	await knex.raw("TRUNCATE TABLE notes RESTART IDENTITY CASCADE");
	await knex("notes").insert(notes);
};
