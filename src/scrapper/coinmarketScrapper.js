const got = require('got')
const cheerio = require('cheerio')
const jsonframe = require('jsonframe-cheerio');


got('https://coinmarketcap.com/all/views/all/')
  .then((res) => {
    const $ = cheerio.load(res.body)
    jsonframe($) // initializes the plugin

    // exception handling
    process.on('uncaughtException', err =>
      console.error('uncaught exception: ', err))
    process.on('unhandledRejection', (reason, p) =>
      console.error('unhandled rejection: ', reason, p))

    const frame = {
      crypto: {
        selector: 'tbody > tr',
        data: [{
          name: 'td:nth-child(2) > a:nth-child(3)',
          url: {
            selector: 'td:nth-child(2) > a:nth-child(3)',
            attr: 'href',
          },
          marketcap: 'tr > td:nth-child(4)',
          price: 'tr > td:nth-child(5) > a:nth-child(1)',
        }],
      },

    }

    const companiesList = $('tbody').scrape(frame)
    console.log(companiesList)
  })
  .catch(console.error)
