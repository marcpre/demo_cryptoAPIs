const knex = require("../connection/db.js")
const exchange = require("../exchange/exchange")

function runScheduler() {
    //  if (process.env.NODE_ENV === "production") {
    setInterval(() => exchange.callTickers(), 10000)
    //  }
}

module.exports = {
    runScheduler,
}
