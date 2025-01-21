const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart');

router.get('/cart', cartController.showCart);

module.exports = router;
