const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.post('/shortlink',controller.shortLink);
router.get('/link/:link',controller.getLink);


module.exports = router;