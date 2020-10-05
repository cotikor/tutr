const faker = require("faker");

const create = () => ({
	quiz_id: faker.random.number({ min: 1, max: 49 }),
	student_id: faker.random.number({ min: 1, max: 9 }),
	subject_id: faker.random.number({ min: 1, max: 19 }),
	score: `${faker.random.number(100)}%`,
});

exports.seed = async function (knex, Promise) {
	const scores = [];

	for (let i = 0; i < 20; i++) {
		scores.push(create());
	}

	await knex.raw("TRUNCATE TABLE scores RESTART IDENTITY CASCADE");
	await knex("scores").insert(scores);
};
