const knex = require('../connection/db.js')


async function getExchangeId(name) {
  return await knex('exchanges').select().where({ name })
}

module.exports = {
  getExchangeId,
}
