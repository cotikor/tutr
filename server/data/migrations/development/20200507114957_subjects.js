exports.up = function (knex, Promise) {
	return knex.schema.createTable("subjects", (tbl) => {
		tbl.increments();
		tbl.string("subject").notNullable();
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists("subjects");
};
