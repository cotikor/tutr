

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
		tbl.timestamp("updated_at", { useTz: true }).defaultTo(knex.fn.now());
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists("notes");
};
