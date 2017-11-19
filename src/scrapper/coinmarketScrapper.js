const cheerio = require('cheerio')
const jsonframe = require('jsonframe-cheerio')
const got = require('got')
const fs = require('fs')
const path = require('path')

async function scrapCoinmarketCapOverview() {
  const url = 'https://coinmarketcap.com/all/views/all/'
  const html = await got(url)
  const $ = cheerio.load(html.body)

  jsonframe($) // initializing the plugin

  const frame = {
    currency: {
      _s: 'tr', // the selector
      _d: [{ // allow you to get an array of data, not just the first item
        CoinName: 'td.no-wrap.currency-name > a',
        Url: 'td.no-wrap.currency-name > a @ href',
        Symbol: 'td.text-left.col-symbol',
        Price: 'td:nth-child(5) > a',
        MarketCap: 'td.no-wrap.market-cap.text-right',
        CirculatingSupply: 'td.no-wrap.text-right.circulating-supply > a @ data-supply',
        Volume24h: 'td:nth-child(7) > a @ data-usd',
      }],
    },
  }

  const data = $('body').scrape(frame, {
    string: true,
  })

  const folder = path.join(__dirname, '/../data/allCoins.json')
  console.log(`FOLDER: ${folder}`)
  fs.writeFile(folder, data, 'utf8', (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('The file was saved!')
    }
  })

  return data
}


module.exports = {
  scrapCoinmarketCapOverview,
}
