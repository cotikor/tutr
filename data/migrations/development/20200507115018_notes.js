

exports.up = function (knex, Promise) {
	return knex.schema.createTable("notes", (tbl) => {
		tbl.increments("id").primary().unsigned();
		tbl
			.integer("student_id")
			.unsigned()
			.references("id")
			.inTable("students")
			.onDelete("CASCADE")
			.onUpdate("CASCADE")
			.notNullable();
		tbl.text("details").notNullable();
		tbl.datetime("updatedAt").notNullable()
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists("notes");
};
