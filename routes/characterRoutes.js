const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');
const authenticate = require('../middleware/auth');

router.get('/', authenticate, characterController.getAllCharacters);
router.get('/fetch', authenticate, characterController.fetchAndSaveCharacters);

module.exports = router;