const db = require("../../config/dbConfig");

module.exports = {
	getAll: async () => {
		const allSubjects = await db("subjects");
		return allSubjects;
	},

	getSubject: async (id) => {
		const subject = await db("subjects").where({ id }).first();
		return subject;
	},

	addSubject: async (subject) => {
		const newSubjectID = await db("subjects")
			.insert(subject)
			.returning("id")
			.then((id) => {
				return id;
			});

		return newSubjectID[0];
	},

	updateSubject: async (id, subject) => {
		const updateCount = await db("subjects").where("id", id).update(subject);
		return updateCount;
	},

	deleteSubject: async (id) => {
		const deleteCount = await db("subjects").where({ id }).del();
		return deleteCount;
	},
};
