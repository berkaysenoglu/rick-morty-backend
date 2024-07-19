const Character = require('../models/Character');
const Episode = require('../models/Episode');

exports.getAllCharacters = async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.fetchAndSaveCharacters = async (req, res) => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    
    const characters = data.results.map(character => ({
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      type: character.type,
      gender: character.gender,
      origin: character.origin,
      location: character.location,
      image: character.image,
      episode: character.episode
    }));
   
    await Character.insertMany(characters);

    res.status(200).json({ message: 'Characters fetched and saved successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};