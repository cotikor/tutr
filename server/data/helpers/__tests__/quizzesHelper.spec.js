const quizzesHelper = require("../quizzesHelper.js");

describe("GET query to quizzes db", () => {
	it("should return all 50 seeded quizzes in db", async (done) => {
		const allQuizzes = await quizzesHelper.getAll();
		expect(allQuizzes).toHaveLength(50);
		done();
	});

	it("should return 1 quiz", async (done) => {
		const quizzes = await quizzesHelper.getQuiz(1);
		expect(Object.keys(quizzes).sort()).toEqual(
			["id", "question", "answer_a","answer_b","answer_c", "answer_d", "subject_id"].sort()
		);
		done();
	});
});

describe("INSERT query to quizzes db", () => {
	it("should add quiz with specified ID", async (done) => {
		const id = await quizzesHelper.addQuiz({
            question: "Here is a test question?",
            answer_a: "a",
            answer_b: "b",
            answer_c: "c",
            answer_d: "d",
            subject_id: 4
		});
		expect(id).toEqual(51);
		done();
	});
});

describe("UPDATE query to quizzes db", () => {
	it("should update quiz with specified ID", async (done) => {
		quizzesHelper.updateQuiz(51, {
			question: "Here is a test question?",
			answer_a: "a",
			answer_b: "b",
			answer_c: "c",
			answer_d: "d",
			subject_id: 7,
		});
		const updated = await quizzesHelper.getQuiz(51);

		expect(updated.subject_id).toEqual(7);
		done();
	});
});

describe("DELETE query to quizzes db", () => {
	it("should return a count of 1 when deleting specified quiz", async (done) => {
		const id = await quizzesHelper.addQuiz({
			question: "Another test question?",
			answer_a: "a",
			answer_b: "b",
			answer_c: "c",
			answer_d: "d",
			subject_id: 6,
		});
		const count = await quizzesHelper.deleteQuiz(id);

		expect(count).toEqual(1);
		done();
	});
});
