const db = require("../../config/dbConfig");
const { DateTime } = require("luxon");

module.exports = {
  getAll: async () => {
    const allNotes = await db("notes");
    let result = [];

    for (let note of allNotes) {
      result.push(await module.exports.getNote(note.id));
    }

    return result;
  },

  getNote: async (id) => {
    const note = await db("notes").where({ id }).first();
        const student = await db("students")
          .join("notes", "students.id", "notes.student_id")
          .where("notes.id", id)
          .first();

    return Promise.all([note, student]).then((response) => {
      let [note, student] = response;
      let result = {
        id: note.id,
        student: {
          name: `${student.firstname} ${student.lastname}`,
          student_id: note.student_id,
        },
        details: note.details,
        updated_at: DateTime.fromJSDate(note.updated_at).toLocaleString(
          DateTime.DATETIME_SHORT
        ),
      };
      return result;
    });
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
