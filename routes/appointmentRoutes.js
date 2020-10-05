const express = require("express");
const router = express.Router();
const db = require("../data/helpers/appointmentsHelper");
const responseStatus = require("../config/responseStatusConfig");

router.get("/", async (req, res, next) => {
	try {
		const appointments = await db.getAll();
		res.status(responseStatus.success).json({ appointments });
	} catch (err) {
		next(err);
	}
});

router.get("/:id", async (req, res, next) => {
	const { id } = req.params;
	try {
		const appointment = await db.getAppointment(id);
		res.status(responseStatus.success).json({ appointment });
	} catch (err) {
		if (TypeError) {
			console.log(err);
			next(responseStatus.notFound);
		} else {
			next(err);
		}
	}
});

router.post("/", async (req, res, next) => {
	const { body } = req;
	console.log(body);
	try {
		const newAppointmentID = await db.addAppointment(body);
		res.status(responseStatus.postCreated).json({ newAppointmentID });
	} catch (err) {
		next(err);
	}
});

router.put("/:id", async (req, res, next) => {
	const { id } = req.params;
	const { body } = req;
	try {
		const updatedRecords = await db.updateAppointment(id, body);
		res.status(responseStatus.success).json({ updatedRecords });
	} catch (err) {
		next(err);
	}
});

router.delete("/:id", async (req, res, next) => {
	const { id } = req.params;
	try {
		const deletedRecords = await db.deleteAppointment(id);
		res.status(responseStatus.success).json({ deletedRecords });
	} catch (err) {
		next(err);
	}
});

module.exports = router;
