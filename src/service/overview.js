const knex = require('../connection/db.js')

/*
async function insertOverview(coinname, marketcap, price, volume, circulatingSupply, change, createdAt, updatedAt, deletedAt) {

  const coin = {
    coinname,
    marketcap,
    price,
    volume,
    circulatingSupply,
    change,
    createdAt: new Date(),
    updatedAt,
    deletedAt,
  }
  return await knex('overview').insert(coin).returning('id')
}

async function updateOverview(id, coinname, marketcap, price, volume, circulatingSupply, change, createdAt, updatedAt, deletedAt) {
  const coin = {
    coinname,
    marketcap,
    price,
    volume,
    circulatingSupply,
    change,
    createdAt,
    updatedAt,
    deletedAt,
  }

  return knex('overview').select().where({
    id,
  }).first()
    .update(coin)
}
*/

async function getAllOverview() {
  const overview = await knex('overview').select()
  return overview
}

module.exports = {
//  insertOverview,
//  updateOverview,
  getAllOverview,
}
