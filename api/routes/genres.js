const genreController = require('../controllers/genreController');
const express = require('express');
const router = express.Router();

router.get('/', genreController.all);
router.post('/', genreController.create);

module.exports = router;