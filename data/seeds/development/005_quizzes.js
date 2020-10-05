const faker = require("faker");

const create = () => ({
	question: faker.lorem.sentence(10),
	answer_a: faker.lorem.sentence(5),
	answer_b: faker.lorem.sentence(5),
	answer_c: faker.lorem.sentence(5),
	answer_d: faker.lorem.sentence(5),
	subject_id: faker.random.number({ min: 1, max: 19 }),
});

exports.seed = async function (knex, Promise) {
	const quizzes = [];

	for (let i = 0; i < 50; i++) {
		quizzes.push(create());
	}

	await knex.raw("TRUNCATE TABLE quizzes RESTART IDENTITY CASCADE");
	await knex("quizzes").insert(quizzes);
};
