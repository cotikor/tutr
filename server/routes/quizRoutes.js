const express = require("express");
const router = express.Router();
const db = require("../data/helpers/quizzesHelper");
const responseStatus = require("../config/responseStatusConfig");

router.get("/", async (req, res, next) => {
	try {
		const quizzes = await db.getAll();
		res.status(responseStatus.success).json({ quizzes });
	} catch (err) {
		next(err);
	}
});

router.get("/:id", async (req, res, next) => {
	const { id } = req.params;
	try {
		const quiz = await db.getQuiz(id);
		res.status(responseStatus.success).json({ quiz });
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
		const newQuizID = await db.addQuiz(body);
		res.status(responseStatus.postCreated).json({ newQuizID });
	} catch (err) {
		next(err);
	}
});

router.put("/:id", async (req, res, next) => {
	const { id } = req.params;
	const { body } = req;
	try {
		const updatedRecords = await db.updateQuiz(id, body);
		res.status(responseStatus.success).json({ updatedRecords });
	} catch (err) {
		next(err);
	}
});

router.delete("/:id", async (req, res, next) => {
	const { id } = req.params;
	try {
		const deletedRecords = await db.deleteQuiz(id);
		res.status(responseStatus.success).json({ deletedRecords });
	} catch (err) {
		next(err);
	}
});

module.exports = router;
