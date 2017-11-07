const exchange = require('../exchange/exchange')
const scrapper = require('../scrapper/coinmarketScrapper')

function runTickerScheduler() {
  setInterval(() => exchange.callTickers(), 10000)
}

function runCoinMarketCapScheduler() {
  const dayInMilliseconds = 10000 // 1000 * 60 * 60 * 24
  setInterval(() => scrapper.scrapCoinmarketCapOverview(), dayInMilliseconds)
}

module.exports = {
  runTickerScheduler,
  runCoinMarketCapScheduler,
}
