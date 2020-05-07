exports.up = function (knex, Promise) {
	return knex.schema.createTable("appointments", (tbl) => {
		tbl.increments();
		tbl.date("date").notNullable();
		tbl.time("time").notNullable();
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
		tbl
			.integer("note_id")
			.unsigned()
			.references("id")
			.inTable("notes")
			.onDelete("RESTRICT")
			.onUpdate("CASCADE");
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists("appointments");
};
