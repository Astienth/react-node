const gameController = require('../controllers/gameController');
const express = require('express');
const router = express.Router();

router.get('/', gameController.all);
router.post('/', gameController.create);

module.exports = router;