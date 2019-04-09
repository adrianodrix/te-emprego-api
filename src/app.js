const expreess = require('express')
const sendError = require('@helper/sendError')
const routes = require('./routes')

const app = expreess()

app.use(expreess.urlencoded({ extended: true }))
app.use(expreess.json())

app.use(sendError)

app.use('/', routes)

module.exports = app
