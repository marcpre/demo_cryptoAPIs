const scrapper = require('../src/scrapper/coinmarketScrapper')

exports.seed = async(knex, Promise) => {
  return knex('overview').del()
    .then(() => knex('overview').del())
    .then(async() => {
      try {
        const res = await scrapper.scrapCoinmarketCapOverview()
        console.log(res)
        const coins = []
        res.currency.forEach((cur) => {
          // using the if because the first json object is "undefined"
          if (cur.CoinName) {
            coins.push({
              coinname: cur.CoinName,
              marketcap: cur.MarketCap,
              symbol: cur.Symbol,
              price: cur.Price,
              volume: cur.Volume24h,
              circulatingSupply: cur.CirculatingSupply,
              createdAt: new Date(),
              updatedAt: new Date(),
            })
          }
        })
        return knex('overview').insert(coins)
      }
      catch (err) {
        console.log(err)
      }
    })
}
