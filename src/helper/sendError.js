const logger = require('@service/logger')

function handleError(message, status = 500) {
  logger.error({
    message,
    status,
  })

  return this
    .status(status)
    .send({ message })
}

module.exports = (req, res, next) => {
  res.sendError = handleError
  next()
}
