const Poloniex = require("poloniex-api-node");

function getName() {
    return "poloniex";
}

async function getTicker() {

    const poloniex = new Poloniex()

    setInterval(() => {
        try {
            const data = await poloniex.returnTicker()
            let tick = data[this.pair]
            console.log(tick) 
        } catch (err) {
            console.log(err.message)
        }
    }, 2500);
}

module.exports = {
    getTicker,
    getName,
}
