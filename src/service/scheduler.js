const knex = require("../connection/db.js")
const exchange = require("../exchange/exchange")();


export const runScheduler = () => {
//  if (process.env.NODE_ENV === "production") {
    setInterval(() => exchange., 10000)
//  }
}
