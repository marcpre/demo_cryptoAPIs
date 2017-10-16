const knex = require("../connection/db.js")
//exchanges
const exchangePoloniex = require("../exchange/exchangePoloniex.js")();

/**
 * Insert Ticker into db
 **/
async function insertTick(tick) {
    const count = await knex("posts").select().where({
        deleted: false,
    }).count('id')
    console.log("Array: " + count[0].count)
    return count[0].count
}

/**
 * Call Ticker for all exchanges
 **/
async function callTickers() {

    const exchanges = [
        exchangePoloniex,
    ]

    exchanges.forEach((exchange) => {
        exchange.getTicker()
    })
}

module.exports = {
    insertTick,
    callTickers,
}
