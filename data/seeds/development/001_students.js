const faker = require("faker");

const create = () => ({
	firstname: faker.name.firstName(),
	lastname: faker.name.lastName(),
	student_email: faker.internet.email(),
	parent_email: faker.internet.email(),
});

exports.seed = async function (knex, Promise) {
	const students = [];

	for (let i = 0; i < 10; i++) {
		students.push(create());
	}

	await knex.raw("TRUNCATE TABLE students RESTART IDENTITY CASCADE");
	await knex("students").insert(students);
};
