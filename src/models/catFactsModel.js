const mongoose = require('mongoose');
const { Schema } = mongoose;

const catsFactsSchema = new Schema({
  fact: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Catsfact', catsFactsSchema);