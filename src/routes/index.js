const express = require('express')

const router = express.Router()
const overviewService = require('../service/overview')

router.get('/', async(req, res) => {
  const overviewList = await overviewService.getAllOverview()
  res.render('index', { overviewList })
})

module.exports = router
