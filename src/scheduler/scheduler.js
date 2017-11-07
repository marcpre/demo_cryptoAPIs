const service = require('../service/ticker.js')
// exchanges
const exchangePoloniex = require('../exchange/exchangePoloniex.js')()

/**
const runScheduler = () => {
    setInterval(()=> service.callTickers() ,10000)
}
* */
/**
 * Call Ticker for all exchanges
 * */
async function runSchedulers() {
  const exchanges = [
    exchangePoloniex,
  ]

  exchanges.forEach((exchange) => {
    exchange.getTicker()
  })
}

module.exports = {
  runSchedulers,
}
