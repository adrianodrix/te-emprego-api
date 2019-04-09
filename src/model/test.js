const mongoose = require('mongoose')

const { Schema } = mongoose

const TestSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
})

module.exports = mongoose.model('test', TestSchema)
