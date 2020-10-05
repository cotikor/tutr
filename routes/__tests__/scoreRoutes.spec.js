const request = require("supertest");
const server = require("../../api/server.js");

describe("scores routes", () => {
	describe("GET all scores", () => {
		it("should return a 200", async () => {
			const expectedStatusCode = 200;
			const response = await request(server).get("/scores");
			expect(response.status).toEqual(expectedStatusCode);
		});
	});
	describe("GET single score", () => {
		it("should return a 200", async () => {
			const expectedStatusCode = 200;
			const response = await request(server).get("/scores/1");
			expect(response.status).toEqual(expectedStatusCode);
		});
		it("should return a correctly shaped score object", async () => {
			const expectedShape = expect.objectContaining({
				score: {
                    id: expect.any(Number),
					quiz_id: expect.any(Number),
					student_id: expect.any(Number),
                    subject_id: expect.any(Number),
                    score: expect.any(String)
				},
			});
			const response = await request(server).get("/scores/1");
			expect(response.body).toEqual(expectedShape);
		});
	});
	describe("POST score", () => {
		it("should add a score", async () => {
			const score = {
				quiz_id: 5,
				student_id: 8,
				subject_id: 2,
				score: "77%"
			};
			const response = await request(server)
				.post("/scores")
				.send(score);
			expect(response.status).toBe(201);
			expect(response.body).toEqual({ newScoreID: expect.any(Number) });
		});
	});
	describe("PUT score", () => {
		it("should return a 200", async () => {
			const expectedStatusCode = 200;
			const response = await request(server).get("/scores");
			expect(response.status).toEqual(expectedStatusCode);
		});
		it("should update an score", async () => {
			const body = {
				student_id: 7,
                subject_id: 9,
                score: "80%"
			};
			const response = await request(server).put("/scores/1").send(body);
			expect(response.body).toEqual({ updatedRecords: 1 });
		});
	});
	describe("DELETE score", () => {
		it("should delete an score", async () => {
			const response = await request(server).delete("/scores/5");
			expect(response.body).toEqual({ deletedRecords: 1 });
		});
	});
});
