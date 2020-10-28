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
    
    const notes = await db("notes").select('notes.updatedAt', 'notes.details', 'notes.id as note_id')
      .join("appointments", "notes.student_id", "appointments.student_id")
      .where("appointments.id", id)

    const subject = await db("subjects")
      .select("subjects.subject")
      .join("appointments", "subjects.id", "appointments.subject_id")
      .where("appointments.id", id)
      .first();

    return Promise.all([appointment, student, notes, subject]).then(
      (response) => {
        let [appointment, student, notes, subject] = response;
        let result = {
          date: DateTime.fromJSDate(appointment.date).toLocaleString({
            weekday: "short",
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          }),
          student: {
            name: `${student.firstname} ${student.lastname}`,
            email: student.student_email,
            parent_email: student.secondary_email,
            student_id: appointment.student_id,
          },
          subject: subject.subject,
          notes: notes.map(note => {
            return {
              note_id: note.note_id,
              details: note.details,
              updatedAt: DateTime.fromJSDate(note.updatedAt).toLocaleString({
                weekday: "short",
                month: "short",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              }),
            };
          }),
        };
        return result;
      }
    );
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
