const knex = require('../connection/db.js')

async function insertTicker(exchange_id, pair, last, lowestAsk, highestBid, percentChange, baseVolume, quoteVolume, isFrozen, high24hr, low24hr) {
  const ticker = {
		exchange_id,   
    pair,
    last,
    lowestAsk,
    highestBid,
    percentChange,
    baseVolume,
    quoteVolume,
    isFrozen,
    high24hr,
    low24hr
  }
  return await knex('ticker_data').insert(ticker).returning('id')
}

module.exports = {
  insertTicker,
}
