exports.up = function (knex, Promise) {
	return knex.schema.createTable("scores", (tbl) => {
		tbl.increments("id").primary().unsigned();
		tbl
			.integer("quiz_id")
			.unsigned()
			.references("id")
			.inTable("quizzes")
			.onDelete("RESTRICT")
			.onUpdate("CASCADE")
			.notNullable();
		tbl
			.integer("student_id")
			.unsigned()
			.references("id")
			.inTable("students")
			.onDelete("RESTRICT")
			.onUpdate("CASCADE")
			.notNullable();
		tbl
			.integer("subject_id")
			.unsigned()
			.references("id")
			.inTable("subjects")
			.onDelete("RESTRICT")
			.onUpdate("CASCADE")
			.notNullable();
		tbl.string("score").notNullable();
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists("scores");
};
