const express = require('express');
const router = express.Router();
const episodeController = require('../controllers/episodeController');
const authenticate = require('../middleware/auth');

router.get('/', authenticate, episodeController.getAllEpisodes);
router.get('/fetch', authenticate, episodeController.fetchAndSaveEpisodes);

module.exports = router;