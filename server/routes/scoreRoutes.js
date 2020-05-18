const express = require("express");
const router = express.Router();
const db = require("../data/helpers/scoresHelper");
const responseStatus = require("../config/responseStatusConfig");

router.get("/", async (req, res, next) => {
	try {
		const scores = await db.getAll();
		res.status(responseStatus.success).json({ scores });
	} catch (err) {
		next(err);
	}
});

router.get("/:id", async (req, res, next) => {
	const { id } = req.params;
	try {
		const score = await db.getScore(id);
		res.status(responseStatus.success).json({ score });
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
		const newScoreID = await db.addScore(body);
		res.status(responseStatus.postCreated).json({ newScoreID });
	} catch (err) {
		next(err);
	}
});

router.put("/:id", async (req, res, next) => {
	const { id } = req.params;
	const { body } = req;
	try {
		const updatedRecords = await db.updateScore(id, body);
		res.status(responseStatus.success).json({ updatedRecords });
	} catch (err) {
		next(err);
	}
});

router.delete("/:id", async (req, res, next) => {
	const { id } = req.params;
	try {
		const deletedRecords = await db.deleteScore(id);
		res.status(responseStatus.success).json({ deletedRecords });
	} catch (err) {
		next(err);
	}
});

module.exports = router;
