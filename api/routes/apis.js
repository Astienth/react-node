const apisController = require('../controllers/apisController');
const express = require('express');
const router = express.Router();

router.get('/:apisname/:page?/:pageSize?', apisController.apiName);

module.exports = router;