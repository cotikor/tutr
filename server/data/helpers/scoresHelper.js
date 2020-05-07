const db = require("../../config/dbConfig");

module.exports = {
	getAll: async () => {
		const allScores = await db("scores");
		return allScores;
	},

	getScore: async (id) => {
		const score = await db("scores").where({ id }).first();
		return score;
	},

	addScore: async (score) => {
		const newScoreID = await db("scores")
			.insert(score)
			.returning("id")
			.then((id) => {
				return id;
			});

		return newScoreID[0];
	},

	updateScore: async (id, score) => {
		const updateCount = await db("scores").where("id", id).update(score);
		return updateCount;
	},

	deleteScore: async (id) => {
		const deleteCount = await db("scores").where({ id }).del();
		return deleteCount;
	},
};
