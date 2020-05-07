const faker = require("faker");

const create = (id) => ({
	firstname: faker.name.firstName(),
	lastname: faker.name.lastName(),
	student_email: faker.internet.email(),
	secondary_email: faker.internet.email(),
});

exports.seed = async function (knex, Promise) {
	const students = [];

	for (let i = 1; i < 11; i++) {
		students.push(create(i));
	}

	await knex.raw("TRUNCATE TABLE students RESTART IDENTITY CASCADE");
	await knex("students").insert(students);
};
