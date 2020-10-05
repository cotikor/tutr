const request = require("supertest");
const server = require("../../api/server.js");

describe("subjects routes", () => {
	describe("GET all subjects", () => {
		it("should return a 200", async () => {
			const expectedStatusCode = 200;
			const response = await request(server).get("/subjects");
			expect(response.status).toEqual(expectedStatusCode);
		});
	});
	describe("GET single subject", () => {
		it("should return a 200", async () => {
			const expectedStatusCode = 200;
			const response = await request(server).get("/subjects/1");
			expect(response.status).toEqual(expectedStatusCode);
		});
		it("should return a correctly shaped subject object", async () => {
			const expectedShape = expect.objectContaining({
				subject: {
					id: expect.any(Number),
					subject: expect.any(String),
				},
			});
			const response = await request(server).get("/subjects/1");
			expect(response.body).toEqual(expectedShape);
		});
	});
	describe("POST subject", () => {
		it("should add a subject", async () => {
			const subject = {
                subject: "Geology"
			};
			const response = await request(server).post("/subjects").send(subject);
			expect(response.status).toBe(201);
			expect(response.body).toEqual({ newSubjectID: expect.any(Number) });
		});
	});
	describe("PUT subject", () => {
		it("should return a 200", async () => {
			const expectedStatusCode = 200;
			const response = await request(server).get("/subjects");
			expect(response.status).toEqual(expectedStatusCode);
		});
		it("should update a subject", async () => {
			const body = {
                subject: 'Economics'
			};
			const response = await request(server).put("/subjects/1").send(body);
			expect(response.body).toEqual({ updatedRecords: 1 });
		});
	});
	describe("DELETE subject", () => {
		it("should delete a subject", async () => {
			const response = await request(server).delete("/subjects/1");
			expect(response.body).toEqual({ deletedRecords: 1 });
		});
	});
});
