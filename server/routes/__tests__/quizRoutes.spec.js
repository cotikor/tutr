const request = require("supertest");
const server = require("../../api/server.js");

describe("quizzes routes", () => {
	describe("GET all quizzes", () => {
		it("should return a 200", async () => {
			const expectedStatusCode = 200;
			const response = await request(server).get("/quizzes");
			expect(response.status).toEqual(expectedStatusCode);
		});
	});
	describe("GET single quiz", () => {
		it("should return a 200", async () => {
			const expectedStatusCode = 200;
			const response = await request(server).get("/quizzes/1");
			expect(response.status).toEqual(expectedStatusCode);
		});
		it("should return a correctly shaped quiz object", async () => {
			const expectedShape = expect.objectContaining({
				quiz: {
					id: expect.any(Number),
					question: expect.any(String),
					answer_a: expect.any(String),
					answer_b: expect.any(String),
					answer_c: expect.any(String),
					answer_d: expect.any(String),
					subject_id: expect.any(Number),
				},
			});
			const response = await request(server).get("/quizzes/1");
			expect(response.body).toEqual(expectedShape);
		});
	});
	describe("POST quiz", () => {
		it("should add a quiz", async () => {
			const quiz = {
				question: "Test Question",
				answer_a: "Answer A",
				answer_b: "Answer B",
				answer_c: "Answer C",
				answer_d: "Answer D",
				subject_id: 2,
			};
			const response = await request(server).post("/quizzes").send(quiz);
			expect(response.status).toBe(201);
			expect(response.body).toEqual({ newQuizID: expect.any(Number) });
		});
	});
	describe("PUT quiz", () => {
		it("should return a 200", async () => {
			const expectedStatusCode = 200;
			const response = await request(server).get("/quizzes");
			expect(response.status).toEqual(expectedStatusCode);
		});
		it("should update a quiz", async () => {
			const body = {
                subject_id: 5
			};
			const response = await request(server).put("/quizzes/1").send(body);
			expect(response.body).toEqual({ updatedRecords: 1 });
		});
	});
	describe("DELETE quiz", () => {
		it("should delete a quiz", async () => {
			const response = await request(server).delete("/quizzes/1");
			expect(response.body).toEqual({ deletedRecords: 1 });
		});
	});
});
