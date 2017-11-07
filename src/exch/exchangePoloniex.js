const Poloniex = require('poloniex-api-node')

const poloniex = new Poloniex()

function getName() {
  return 'poloniex'
}

async function getTicker() {
  const poloniex = new Poloniex()

  poloniex.returnTicker().then((ticker) => {
    Object.keys(ticker).forEach((pair) => {
      if (pair.startsWith('USDT')) {
        const currency = pair.split('_')[1]

        const result = ticker[pair]

        // console.log(ticker)

        // save to database
      }
    })
  }).catch((err) => {
    console.log(err)
  })
}

module.exports = {
  getTicker,
}
