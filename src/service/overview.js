const knex = require('../connection/db.js')
const scrapper = require('../scrapper/coinmarketScrapper')

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

module.exports = {
  insertOverview,
  updateOverview,
}
