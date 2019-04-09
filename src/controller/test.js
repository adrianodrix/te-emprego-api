const Test = require('@model/test')

const TestController = {
  helloWorld(req, res) {
    // res.send('Hello World!!!')
    res.sendError('Erro de acesso ao banco de dados', 500)
  },

  createSomeone(req, res) {
    const { name, age } = req.body
    const person = new Test({ name, age })
    person.save((err, person) => res.status(500).send({ message: 'erro' }))
    res.send(person)
  },
}

module.exports = TestController
