const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop');

router.get('/', shopController.loadMainPage);
router.get('/admin', shopController.loadAdminPage);

module.exports = router;