const notesHelper = require("../notesHelper.js");
const moment = require('moment');

describe("GET query to notes db", () => {
	it("should return all 100 notes", async (done) => {
		const allNotes = await notesHelper.getAll();
		expect(allNotes).toHaveLength(100);
		done();
	});

	it("should return 1 note", async (done) => {
		const note = await notesHelper.getNote(1);
		expect(Object.keys(note).sort()).toEqual(["id", "note", "student_id", "datetime"].sort());
		done();
	});
});

describe("INSERT query to notes db", () => {
	it("should add notes with specified ID", async (done) => {
		const id = await notesHelper.addNote({
            note: "Student did very well in today's session.",
			student_id: 8,
			datetime: moment().format()
		});
		expect(id).toEqual(101);
		done();
	});
});

describe("UPDATE query to notes db", () => {
	it("should update note with specified ID", async (done) => {
		notesHelper.updateNote(101, {
			note: "Student did very well in today's session.",
			student_id: 1,
			datetime: moment().format()
		});
		const updated = await notesHelper.getNote(101);

		expect(updated.student_id).toEqual(1);
		done();
	});
});

describe("DELETE query to notes db", () => {
	it("should return a count of 1 when deleting specified note", async (done) => {
		const id = await notesHelper.addNote({
			note: "Student needs to focus on matrices",
			student_id: 5,
			datetime: moment().format()
		});
		const count = await notesHelper.deleteNote(id);

		expect(count).toEqual(1);
		done();
	});
});
