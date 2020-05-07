exports.up = function (knex, Promise) {
	return knex.schema.createTable("quizzes", (tbl) => {
		tbl.increments();
		tbl.text("question").notNullable();
		tbl.text("answer_a").notNullable();
		tbl.text("answer_b").notNullable();
		tbl.text("answer_c").notNullable();
		tbl.text("answer_d").notNullable();
		tbl
			.integer("subject_id")
			.unsigned()
			.references("id")
			.inTable("subjects")
			.onDelete("RESTRICT")
			.onUpdate("CASCADE")
			.notNullable();
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists("quizzes");
};
