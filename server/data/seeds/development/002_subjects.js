const faker = require("faker");

const create = () => ({
	subject: faker.hacker.ingverb(),
});

exports.seed = async function (knex, Promise) {
	const subjects = [];

	for (let i = 0; i < 20; i++) {
		subjects.push(create());
	}

	await knex.raw("TRUNCATE TABLE subjects RESTART IDENTITY CASCADE");
	await knex("subjects").insert(subjects);
};
