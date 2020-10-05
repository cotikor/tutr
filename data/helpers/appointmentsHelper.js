const db = require("../../config/dbConfig");

module.exports = {
	getAll: async () => {
		const allAppointments = await db("appointments");
		return allAppointments;
	},

	getAppointment: async (id) => {
		const appointment = await db("appointments").where({ id }).first();
		return appointment;
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
		const updateCount = await db("appointments").where("id", id).update(appointment);
		return updateCount;
	},

	deleteAppointment: async (id) => {
		const deleteCount = await db("appointments").where({ id }).del();
		return deleteCount;
	},
};
