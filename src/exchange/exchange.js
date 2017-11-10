const exchangePoloniex = require('./exchangePoloniex.js')


async function callTickers() {
  const exchanges = [
    exchangePoloniex,
  ]

  exchanges.forEach((exchange) => {
    exchange.getTicker()
  })
}

module.exports = {
  callTickers,
}
