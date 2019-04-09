const chalk = require('chalk')
const app = require('@app')
const config = require('@config')

module.exports = (err) => {
  console.clear()

  if (err) {
    console.log(chalk.red(`Erro ao conectar no banco de dados: ${err}`))
    return
  }

  app.listen(config.app.port, (err) => {
    if (err) {
      return console.log(chalk.red(err))
    }
    return console.log(chalk.green(`iniciou em http://localhost:${config.app.port}`))
  })
}
