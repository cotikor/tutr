const subjectsHelper = require("../subjectsHelper.js");

describe("GET query to subjects db", () => {
	it("should return all 20 subjects", async (done) => {
		const allSubjects = await subjectsHelper.getAll();
		expect(allSubjects).toHaveLength(20);
		done();
	});

	it("should return 1 subject", async (done) => {
		const subject = await subjectsHelper.getSubject(1);
		expect(Object.keys(subject).sort()).toEqual(
			["id", "subject"].sort()
		);
		done();
	});
});

describe("INSERT query to subjects db", () => {
	it("should add subjects with specified ID", async (done) => {
		const id = await subjectsHelper.addSubject({
			subject: "Geometry"
		});
		expect(id).toEqual(21);
		done();
	});
});

describe("UPDATE query to subjects db", () => {
	it("should update subject with specified ID", async (done) => {
		subjectsHelper.updateSubject(21, {
			subject: "Algebra"
		});
		const updated = await subjectsHelper.getSubject(21);

		expect(updated.subject).toEqual("Algebra");
		done();
	});
});

describe("DELETE query to subjects db", () => {
	it("should return a count of 1 when deleting specified subject", async (done) => {
		const id = await subjectsHelper.addSubject({
			subject: "Creative Writing"
		});
		const count = await subjectsHelper.deleteSubject(id);

		expect(count).toEqual(1);
		done();
	});
});
