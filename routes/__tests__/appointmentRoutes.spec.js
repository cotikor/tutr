const request = require("supertest");
const server = require("../../api/server.js");
const moment = require('moment')


describe("appointments routes", () => {
	describe("GET all appointments", () => {
		it("should return a 200", async () => {
			const expectedStatusCode = 200;
			const response = await request(server).get("/appointments");
			expect(response.status).toEqual(expectedStatusCode);
		});
	});
	describe("GET single appointment", () => {
		it("should return a 200", async () => {
			const expectedStatusCode = 200;
			const response = await request(server).get("/appointments/1");
			expect(response.status).toEqual(expectedStatusCode);
		});
		it("should return a correctly shaped appointment object", async () => {
			const expectedShape = expect.objectContaining({
				appointment: {
					id: expect.any(Number),
					datetime: expect.any(String),
					student_id: expect.any(Number),
					subject_id: expect.any(Number),
					note_id: expect.any(Number),
				},
			});
			const response = await request(server).get("/appointments/1");
			expect(response.body).toEqual(expectedShape);
		});
	});
	describe("POST appointment", () => {
		it("should add an appointment", async () => {
			const appointment = {
				datetime: moment().format(),
				student_id: 4,
				subject_id: 5,
				note_id: 6,
			};
			const response = await request(server).post("/appointments").send(appointment);
			expect(response.status).toBe(201);
			expect(response.body).toEqual({ newAppointmentID: expect.any(Number) });
		});
	});
	describe("PUT appointment", () => {
		it("should return a 200", async () => {
			const expectedStatusCode = 200;
			const response = await request(server).get("/appointments");
			expect(response.status).toEqual(expectedStatusCode);
		});
		it("should update an appointment", async () => {
			const body = {
				student_id: 7,
				subject_id: 4,
			};
			const response = await request(server).put("/appointments/1").send(body);
			expect(response.body).toEqual({ updatedRecords: 1 });
		});
	});
	describe("DELETE appointment", () => {
		it("should delete an appointment", async () => {
			const response = await request(server).delete("/appointments/5");
			expect(response.body).toEqual({ deletedRecords: 1 });
		});
	});
});
