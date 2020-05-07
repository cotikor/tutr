exports.up = function (knex, Promise) {
	return knex.schema.createTable("notes", (tbl) => {
		tbl.increments();
		tbl
			.integer("student_id")
			.unsigned()
			.references("id")
			.inTable("students")
			.onDelete("RESTRICT")
			.onUpdate("CASCADE")
			.notNullable();
		tbl.text("note").notNullable();
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists("notes");
};
