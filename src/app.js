const expreess = require('express')
const routes = require('./routes')

const app = expreess()

app.use('/', routes)

module.exports = app
