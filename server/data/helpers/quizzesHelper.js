const db = require("../../config/dbConfig");

module.exports = {
	getAll: async () => {
		const allQuizzes = await db("quizzes");
		return allQuizzes;
	},

	getQuiz: async (id) => {
		const quiz = await db("quizzes").where({ id }).first();
		return quiz;
	},

	addQuiz: async (quiz) => {
		const newQuizID = await db("quizzes")
			.insert(quiz)
			.returning("id")
			.then((id) => {
				return id;
			});

		return newQuizID[0];
	},

	updateQuiz: async (id, quiz) => {
		const updateCount = await db("quizzes").where("id", id).update(quiz);
		return updateCount;
	},

	deleteQuiz: async (id) => {
		const deleteCount = await db("quizzes").where({ id }).del();
		return deleteCount;
	},
};
