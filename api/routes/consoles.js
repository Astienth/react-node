const consoleController = require('../controllers/consoleController');
const express = require('express');
const router = express.Router();

router.get('/', consoleController.all);
router.post('/', consoleController.create);

module.exports = router;