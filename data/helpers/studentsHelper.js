const db = require("../../config/dbConfig");
const { DateTime } = require("luxon");

module.exports = {
  getAll: async () => {
    const allStudents = await db("students");
    return allStudents;
  },

  getStudent: async (id) => {
    let currentDate = new Date().toISOString();
    const student = await db("students").where({ id }).first();
    const notes = await db("notes")
      .select("notes.updated_at", "notes.details", "notes.id as note_id")
      .join("students", "notes.student_id", "students.id")
      .where("students.id", id);
    const appointments = await db("appointments")
      .select("date", "subject")
      .join("students", "appointments.student_id", "students.id")
      .where("date", ">=", currentDate)
      .andWhere("students.id", id);

    return Promise.all([appointments, student, notes]).then((response) => {
      let [appointments, student, notes] = response;
      let result = {
        id: student.id,
        firstname: student.firstname,
        lastname: student.lastname,
        student_email: student.student_email,
        parent_email: student.parent_email,
        notes: notes.map((note) => {
          return {
            note_id: note.note_id,
            details: note.details,
            updated_at: DateTime.fromJSDate(note.updated_at).toLocaleString(
              DateTime.DATETIME_SHORT
            ),
          };
        }),
        upcomingAppointments: appointments.map((appointment) => {
          return {
            subject: appointment.subject,
            date: DateTime.fromJSDate(appointment.date).toLocaleString(
              DateTime.DATETIME_SHORT
            ),
          };
        }),
      };
      return result;
    });
  },

  addStudent: async (student) => {
    const newStudentID = await db("students")
      .insert(student)
      .returning("id")
      .then((id) => {
        return id;
      });

    return newStudentID[0];
  },

  updateStudent: async (id, student) => {
    const updateCount = await db("students").where("id", id).update(student);
    return updateCount;
  },

  deleteStudent: async (id) => {
    const deleteCount = await db("students").where({ id }).del();
    return deleteCount;
  },
};
