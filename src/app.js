require("dotenv").config()
const express = require("express")
const path = require("path")
const logger = require("morgan")
const bodyParser = require("cookie-parser")
const cookieParser = require('cookie-parser');
const app = express()
const scheduler = require("./scheduler/scheduler.js")

//start scheduler
const data = scheduler.runSchedulers()
console.log(data)

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

app.use(logger(process.env.LOG_ENV))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false, }))
app.use(express.static(path.join(__dirname, "/../public")))
app.use(cookieParser())

//routes

/*
* Server
*/
//Start Server
const port = process.env.APP_PORT || 8080
const host = process.env.APP_HOST || "localhost"

app.listen(port, function() {
  console.log("Listening on " + host + ":" + port)
})

module.exports = app
