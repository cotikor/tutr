const db = require("../../config/dbConfig");

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
      .select(
        "students.firstname",
        "students.lastname",
        "students.student_email",
        "students.id"
      )
      .join("appointments", "students.id", "appointments.student_id")
      .where("appointments.id", id)
      .first();
    const notes = await db("notes");

    const subject = await db("subjects")
      .select("subjects.subject")
      .join("appointments", "subjects.id", "appointments.subject_id")
      .where("appointments.id", id)
      .first();

    return Promise.all([appointment, student, notes, subject]).then(
      (response) => {
        let [appointment, student, notes, subject] = response;
        let result = {
          date: appointment.datetime,
          student: {
            name: `${student.firstname} ${student.lastname}`,
            email: student.student_email,
            student_id: student.id,
          },
          subject: subject.subject,
          notes: notes.filter((note) => {
            if (note.student_id === student.id) {
              return { note };
            }
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
