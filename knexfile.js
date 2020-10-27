require("dotenv").config();
const pg = require("pg");

pg.defaults.ssl = false;

module.exports = {
	development: {
		client: "pg",
		connection: {
			host: "127.0.0.1",
			user: "postgres",
			password: process.env.PG_PASSWORD,
			database: "tutr_dev",
		},
		migrations: {
			directory: "./data/migrations/development",
		},
		seeds: {
			directory: "./data/seeds/development",
		},
		useNullAsDefault: true,
	},

	production: {
		client: "pg",
		connection: process.env.DATABASE_URL,
		ssl: true,
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: "./data/migrations/production",
		},
		seeds: {
			directory: "./data/seeds/production",
		},
	},
};
