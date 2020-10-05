const express = require("express");
const router = express.Router();
const db = require("../data/helpers/subjectsHelper");
const responseStatus = require("../config/responseStatusConfig");

router.get("/", async (req, res, next) => {
	try {
		const subjects = await db.getAll();
		res.status(responseStatus.success).json({ subjects });
	} catch (err) {
		next(err);
	}
});

router.get("/:id", async (req, res, next) => {
	const { id } = req.params;
	try {
		const subject = await db.getSubject(id);
		res.status(responseStatus.success).json({ subject });
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
		const newSubjectID = await db.addSubject(body);
		res.status(responseStatus.postCreated).json({ newSubjectID });
	} catch (err) {
		next(err);
	}
});

router.put("/:id", async (req, res, next) => {
	const { id } = req.params;
	const { body } = req;
	try {
		const updatedRecords = await db.updateSubject(id, body);
		res.status(responseStatus.success).json({ updatedRecords });
	} catch (err) {
		next(err);
	}
});

router.delete("/:id", async (req, res, next) => {
	const { id } = req.params;
	try {
		const deletedRecords = await db.deleteSubject(id);
		res.status(responseStatus.success).json({ deletedRecords });
	} catch (err) {
		next(err);
	}
});

module.exports = router;
