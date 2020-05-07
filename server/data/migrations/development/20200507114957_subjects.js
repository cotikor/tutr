exports.up = function (knex, Promise) {
	return knex.schema.createTable("subjects", (tbl) => {
		tbl.increments("id").primary().unsigned();
		tbl.string("subject").notNullable();
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists("subjects");
};
