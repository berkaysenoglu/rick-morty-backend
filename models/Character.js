const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  id: Number,
  name: String,
  status: String,
  species: String,
  type: String,
  gender: String,
  origin: {
    name: String,
    url: String
  },
  location: {
    name: String,
    url: String
  },
  image: String,
  episode: [String] // URL'leri saklamak için
});

module.exports = mongoose.model('Character', characterSchema);