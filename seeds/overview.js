const faker = require('faker')
const scrapper = require('../src/scrapper/coinmarketScrapper')


exports.seed = async(knex, Promise) => {

  return knex('overview').del()
    .then(() => knex('overview').del())
    .then(() => {
      const res = scrapper.scrapCoinmarketCapOverview()
      
      const coins = []
      for (let index = 0; index < res.currency.length; index += 1) {
        coins.push({
          coinname: res.currency.coin,
          marketcap,
          price,
          volume,
          circulatingSupply,
          change,
          createdAt: new Date(),
          updatedAt,
          deletedAt,
        })
      }
      
      
      
      coin.push({
        coinname: '',
        marketcap,
        price,
        volume,
        circulatingSupply,
        change,
        createdAt: new Date(),
        updatedAt,
        deletedAt,
      })
      return knex('users').insert(users)
    })
}
