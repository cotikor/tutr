const db = require('../../config/dbConfig')

module.exports = {
	getAll: async () => {
		const allStudents = await db("students");
		return allStudents;
	},

	getStudent: async (id) => {
        const student = await db("students").where({ id }).first();
        return student
	},

	addStudent: async (student) => {
		const newStudentID = await db("students")
			.insert(student)
			.returning("id")
			.then((id) => {
				return id;
			});

		return newStudentID[0];
	},

	updateStudent: async (id, student) => {
		const updateCount = await db("students").where("id", id).update(student);
		return updateCount;
	},

	deleteStudent: async (id) => {
		const deleteCount = await db("students").where({ id }).del();
		return deleteCount;
	},
};
