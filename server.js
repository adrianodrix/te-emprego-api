require('dotenv').config()
require('module-alias/register')

const chalk = require('chalk')
const mongoose = require('mongoose')
const boot = require('@service/boot')


mongoose.set('useNewUrlParser', true)
mongoose.set('useCreateIndex', true)

const config = require('@config')

console.clear()
if (config.db.connectionString) {
  mongoose
    .connect(config.db.connectionString, boot)
} else {
  console.log('Connection String não encontrada.')
  console.log(chalk.yellow('Você já criou seu arquivo .env?\n'))
}
