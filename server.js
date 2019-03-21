const expreess = require('express')

const app = expreess()

app.use('/', (req, res) => {
  res.send('Hello, World!')
})

app.listen(4000, (err) => {
  if (err) {
    return console.log('error')
  }
  return console.log('iniciou em http://localhost:4000')
})
