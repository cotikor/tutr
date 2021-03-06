const db = require("../../config/dbConfig");
const { DateTime } = require("luxon");

module.exports = {
  getAll: async () => {
    const allAppointments = await db("appointments");
    let result = [];

    for (let appointment of allAppointments) {
      result.push(await module.exports.getAppointment(appointment.id));
    }

    return result;
  },

  getAppointment: async (id) => {
    const appointment = await db("appointments").where({ id }).first();
    const student = await db("students")
      .join("appointments", "students.id", "appointments.student_id")
      .where("appointments.id", id)
      .first();

    const notes = await db("notes")
      .select("notes.updated_at", "notes.details", "notes.id as note_id")
      .join("appointments", "notes.student_id", "appointments.student_id")
      .where("appointments.id", id);

    return Promise.all([appointment, student, notes]).then((response) => {
      let [appointment, student, notes] = response;
      let result = {
        subject: appointment.subject,
        date: DateTime.fromJSDate(appointment.date).toLocaleString(
          DateTime.DATETIME_SHORT
        ),
        student: {
          name: `${student.firstname} ${student.lastname}`,
          email: student.student_email,
          parent_email: student.parent_email,
          student_id: appointment.student_id,
        },
        notes: notes.map((note) => {
          return {
            note_id: note.note_id,
            details: note.details,
            updated_at: DateTime.fromJSDate(note.updated_at).toLocaleString(
              DateTime.DATETIME_SHORT
            ),
          };
        }),
      };
      return result;
    });
  },

  addAppointment: async (appointment) => {
    const newAppointmentID = await db("appointments")
      .insert(appointment)
      .returning("id")
      .then((id) => {
        return id;
      });

    return newAppointmentID[0];
  },

  updateAppointment: async (id, appointment) => {
    const updateCount = await db("appointments")
      .where("id", id)
      .update(appointment);
    return updateCount;
  },

  deleteAppointment: async (id) => {
    const deleteCount = await db("appointments").where({ id }).del();
    return deleteCount;
  },
};
