require('dotenv').config()

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DEV_DB_HOST,
      user: process.env.DEV_DB_USER,
      password: process.env.DEV_DB_PASS,
      database: process.env.DEV_DB_NAME,
    },
  },
}
