const express = require('express');
const router = express.Router();


/**
 * @module routes/cart
 * @requires ../controllers/cart
 * 
 * This module sets up the routes for the shopping cart functionality.
 * It uses the cartController to handle the various cart-related operations.
 */
const cartController = require('../controllers/cart');

router.get('/cart', cartController.showCart);

module.exports = router;
