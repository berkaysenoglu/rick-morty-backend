const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const episodeSchema = new Schema({
  id: Number,
  name: String,
  air_date: String,
  episode: String,
  characters: [String] // Değişiklik: ID'ler yerine URL'ler
});

module.exports = mongoose.model('Episode', episodeSchema);