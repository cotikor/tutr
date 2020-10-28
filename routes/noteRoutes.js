const express = require("express");
const router = express.Router();
const db = require("../data/helpers/notesHelper");
const responseStatus = require("../config/responseStatusConfig");

router.get("/", async (req, res, next) => {
	try {
		const notes = await db.getAll();
		res.status(responseStatus.success).json({ notes });
	} catch (err) {
		next(err);
	}
});

router.get("/:id", async (req, res, next) => {
	const { id } = req.params;
	try {
		const note = await db.getNote(id);
		res.status(responseStatus.success).json({ note });
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
	try {
		const newNoteID = await db.addNote(body);
		res.status(responseStatus.postCreated).json({ newNoteID });
	} catch (err) {
		next(err);
	}
});

router.put("/:id", async (req, res, next) => {
	const { id } = req.params;
	const { body } = req;
	try {
		const updatedRecords = await db.updateNote(id, body);
		res.status(responseStatus.success).json({ updatedRecords });
	} catch (err) {
		next(err);
	}
});

router.delete("/:id", async (req, res, next) => {
	const { id } = req.params;
	try {
		const deletedRecords = await db.deleteNote(id);
		res.status(responseStatus.success).json({ deletedRecords });
	} catch (err) {
		next(err);
	}
});

module.exports = router;
