const studentsHelper = require("../studentsHelper.js");

describe("GET query to students db", () => {
	it("should return all 10 seeded students", async (done) => {
		const allStudents = await studentsHelper.getAll();
		expect(allStudents).toHaveLength(10);
		done();
	});

	it("should return 1 student", async (done) => {
		const students = await studentsHelper.getStudent(1);
		expect(Object.keys(students).sort()).toEqual(
			["id", "firstname", "lastname", "student_email", "parent_email", 'notes', 'upcomingAppointments'].sort()
		);
		done();
	});
});

describe("INSERT query to students db", () => {
	it("should add student with specified ID", async (done) => {
		const id = await studentsHelper.addStudent({
			firstname: "Jane",
			lastname: "Doe",
			student_email: "jdoe@abc.com",
			parent_email: "parentdoe@abc.com",
		});
		expect(id).toEqual(11);
		done();
	});
});

describe("UPDATE query to students db", () => {
	it("should update student with specified ID", async (done) => {
		studentsHelper.updateStudent(11, {
			firstname: "Jane",
			lastname: "Doe",
			student_email: "test@abc.com",
			parent_email: "parentdoe@abc.com",
		});
		const updated = await studentsHelper.getStudent(11);

		expect(updated.student_email).toEqual("test@abc.com");
		done();
	});
});

describe("DELETE query to students db", () => {
	it("should return a count of 1 when deleting specified student", async (done) => {
		const id = await studentsHelper.addStudent({
			firstname: "testfirst",
			lastname: "testlast",
			student_email: "test_email@email.com",
			parent_email: "parenttest@email.com",
		});
		const count = await studentsHelper.deleteStudent(id);

		expect(count).toEqual(1);
		done();
	});
});
