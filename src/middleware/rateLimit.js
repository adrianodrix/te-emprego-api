const { req } = require('@config')
const rateLimit = require('express-rate-limit')
const slowDown = require('express-slow-down')

const darlingStandByMe = slowDown(req.slowDown)
const limiter = rateLimit(req.rateLimit)

module.exports = [
  darlingStandByMe,
  limiter,
]
