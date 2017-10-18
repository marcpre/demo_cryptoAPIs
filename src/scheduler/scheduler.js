const service = require("../service/ticker.js")

const runScheduler = () => {
    setInterval(()=> service.callTickers() ,10000)
}