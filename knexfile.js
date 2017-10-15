require("dotenv").config();

module.exports = {

	development: {
		client: "postgresql",
		connection: {
			database: process.env.DEV_DB_HOST,
			user: process.env.DEV_DB_USER,
			password: process.env.DEV_DB_PASS,
			database : process.env.DEV_DB_NAME,
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		}
	},

	staging: {
		client: "postgresql",
		connection: {
			database: process.env.STAGING_DB_HOST,
			user: process.env.STAGING_DB_USER,
			password: process.env.STAGING_DB_PASS,
			database: process.env.STAGING_DB_NAME,
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		}
	},

	production: {
		client: "postgresql",
		connection: {
			database: process.env.PRODUCTION_DB_HOST,
			user: process.env.PRODUCTION_DB_USER,
			password: process.env.PRODUCTION_DB_PASS,
			database: process.env.PRODUCTION_DB_NAME,
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		}
	}

};
