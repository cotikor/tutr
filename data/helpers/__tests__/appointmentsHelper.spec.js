const appointmentsHelper = require("../appointmentsHelper.js");
const moment = require('moment')
describe("GET query to appointments db", () => {
	it("should return all 20 seeded appointments in db", async (done) => {
		const allAppointments = await appointmentsHelper.getAll();
		expect(allAppointments).toHaveLength(20);
		done();
	});

	it("should return 1 appointment", async (done) => {
		const appointments = await appointmentsHelper.getAppointment(1);
		expect(Object.keys(appointments).sort()).toEqual(
			["id", "student_id", "datetime", "subject_id", "note_id"].sort()
		);
		done();
	});
});

describe("INSERT query to appointments db", () => {
	it("should add appointment with specified ID", async (done) => {
		const id = await appointmentsHelper.addAppointment({
			student_id: 1,
			note_id: 2,
			subject_id: 4,
			datetime: moment().format(),
		});
		expect(id).toEqual(21);
		done();
	});
});

describe("UPDATE query to appointments db", () => {
	it("should update appointment with specified ID", async (done) => {
		appointmentsHelper.updateAppointment(21, {
			student_id: 1,
			note_id: 2,
			subject_id: 3,
			datetime: moment().add(1, "days").add(3, "hours"),
		});
		const updated = await appointmentsHelper.getAppointment(21);

		expect(updated.subject_id).toEqual(3);
		done();
	});
});

describe("DELETE query to appointments db", () => {
	it("should return a count of 1 when deleting specified appointment", async (done) => {
		const id = await appointmentsHelper.addAppointment({
			student_id: 5,
			note_id: 8,
			subject_id: 9,
			datetime: moment().format(),
		});
		const count = await appointmentsHelper.deleteAppointment(id);

		expect(count).toEqual(1);
		done();
	});
});
