exports.up = function (knex, Promise) {
	return knex.schema.createTable("students", (tbl) => {
		tbl.increments();
		tbl.string("firstname").notNullable();
		tbl.string("lastname").notNullable();
		tbl.string("student_email").notNullable().unique();
		tbl.string("secondary_email").notNullable();
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists("students");
};
