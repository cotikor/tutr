exports.up = function (knex, Promise) {
	return knex.schema.createTable("appointments", (tbl) => {
		tbl.increments("id").primary().unsigned();
		tbl.datetime("date").notNullable();
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
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists("appointments");
};
