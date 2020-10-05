const scoresHelper = require("../scoresHelper.js");

describe("GET query to scores db", () => {
	it("should return all 20 seeded scores in db", async (done) => {
		const allScores = await scoresHelper.getAll();
		expect(allScores).toHaveLength(20);
		done();
	});

	it("should return 1 score", async (done) => {
		const scores = await scoresHelper.getScore(1);
		expect(Object.keys(scores).sort()).toEqual(
			["id", "student_id", "quiz_id", "subject_id", "score"].sort()
		);
		done();
	});
});

describe("INSERT query to scores db", () => {
	it("should add score with specified ID", async (done) => {
		const id = await scoresHelper.addScore({
            student_id: 1,
            quiz_id: 2,
            subject_id: 4,
            score: "70%"
		});
		expect(id).toEqual(21);
		done();
	});
});

describe("UPDATE query to scores db", () => {
	it("should update score with specified ID", async (done) => {
		scoresHelper.updateScore(21, {
			student_id: 1,
			quiz_id: 2,
			subject_id: 4,
			score: "60%",
		});
		const updated = await scoresHelper.getScore(21);

		expect(updated.score).toEqual("60%");
		done();
	});
});

describe("DELETE query to scores db", () => {
	it("should return a count of 1 when deleting specified score", async (done) => {
		const id = await scoresHelper.addScore({
			student_id: 5,
			quiz_id: 5,
			subject_id: 7,
			score: "80%",
		});
		const count = await scoresHelper.deleteScore(id);

		expect(count).toEqual(1);
		done();
	});
});
