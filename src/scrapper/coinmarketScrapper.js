const cheerio = require('cheerio')
const jsonframe = require('jsonframe-cheerio')
const got = require('got')

async function scrapCoinmarketCap() {
  const url = 'https://coinmarketcap.com/all/views/all/'
  const html = await got(url)
  const $ = cheerio.load(html.body)

  jsonframe($) // initializing the plugin

  const frame = {
    Coin: 'td.no-wrap.currency-name > a',
    Symbol: 'td.no-wrap.text-right.circulating-supply > a > span.hidden-xs',
    Url: 'td.no-wrap.currency-name > a @ href',
    Price: 'td:nth-child(5) > a',
    MarketCap: 'td.no-wrap.market-cap.text-right',
    Volume_24h: 'td:nth-child(5) > a @ data-usd',
    Circulating_Supply: 'td.no-wrap.text-right.circulating-supply > a @ data-supply',
    Change_24h: 'td.no-wrap.percent-24h.text-right.positive_change',
  }

  const data = JSON.parse($('tbody').scrape(frame, {
    string: true,
  }))
  console.log(data)

  for (let m = 0; m < data.length; m++) {
    let o = data[m]
    console.log(o['Url'])
    data[m].Url = `www.https://coinmarketcap.com${o.Url}`
  }

  console.log(data)

  for (let i = 0; i < data.length; i++) {
    let urlObj = data[i]
    const htmlObj = await got(urlObj)
    const $Obj = cheerio.load(htmlObj.body)
    jsonframe($)

    const frameObj = {
      Coin: 'body > div.container > div > div.col-xs-12.col-sm-12.col-md-12.col-lg-10 > div:nth-child(5) > div.col-xs-6.col-sm-4.col-md-4 > h1',
      Symbol: 'body > div.container > div > div.col-xs-12.col-sm-12.col-md-12.col-lg-10 > div:nth-child(5) > div.col-xs-6.col-sm-4.col-md-4 > h1 > small.bold.hidden-xs',
      Url: urlObj,
      Logo: 'body > div.container > div > div.col-xs-12.col-sm-12.col-md-12.col-lg-10 > div:nth-child(5) > div.col-xs-6.col-sm-4.col-md-4 > h1 > img @ src',
      Twitter: 'body > div > div.timeline-Header.timeline-InformationCircle-widgetParent > h1 > span > a',
      Reddit: '#reddit > div > div.reddit-header > h4 > a:nth-child(2) @ href ',
    }
/*
    const newData[i] = JSON.parse($('body').scrape(frame, {
      string: true,
    }))
*/
  }
}

module.exports = {
  scrapCoinmarketCap,
}
