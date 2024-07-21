const Episode = require('../models/Episode');
const Character = require('../models/Character');



exports.fetchAndSaveEpisodes = async (req, res) => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/episode');
    const data = await response.json();
    
    const episodes = data.results.map(episode => ({
      id: episode.id,
      name: episode.name,
      air_date: episode.air_date,
      episode: episode.episode,
      characters: episode.characters.map(url => url.replace('https://rickandmortyapi.com/api/character/', '')) // URL'leri ID'ye dönüştür
    }));

    await Episode.insertMany(episodes);

    res.status(200).json({ message: 'Episodes fetched and saved successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};