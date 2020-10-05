exports.up = function (knex, Promise) {
	return knex.schema.createTable("appointments", (tbl) => {
		tbl.increments("id").primary().unsigned();
		tbl.datetime("datetime").notNullable();
		tbl
			.integer("student_id")
			.unsigned()
			.references("id")
			.inTable("students")
			.onDelete("CASCADE")
			.onUpdate("CASCADE")
			.notNullable();
		tbl
			.integer("subject_id")
			.unsigned()
			.references("id")
			.inTable("subjects")
			.onDelete("CASCADE")
			.onUpdate("CASCADE")
			.notNullable();
		tbl
			.integer("note_id")
			.unsigned()
			.references("id")
			.inTable("notes")
			.onDelete("CASCADE")
			.onUpdate("CASCADE");
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists("appointments");
};
