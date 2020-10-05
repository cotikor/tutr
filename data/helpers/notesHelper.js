const db = require("../../config/dbConfig");

module.exports = {
	getAll: async () => {
		const allNotes = await db("notes");
		return allNotes;
	},

	getNote: async (id) => {
		const note = await db("notes").where({ id }).first();
		return note;
	},

	addNote: async (note) => {
		const newNoteID = await db("notes")
			.insert(note)
			.returning("id")
			.then((id) => {
				return id;
			});

		return newNoteID[0];
	},

	updateNote: async (id, note) => {
		const updateCount = await db("notes").where("id", id).update(note);
		return updateCount;
	},

	deleteNote: async (id) => {
		const deleteCount = await db("notes").where({ id }).del();
		return deleteCount;
	},
};
