const express = require('express');
const router = express.Router();


/**
 * @module routes/product
 * @requires ../controllers/product
 * 
 * This module sets up the routes for product-related operations.
 * It uses the productController to handle the logic for each route.
 */
const productController = require('../controllers/product');

router.get('/product/:id', productController.getProductById);

module.exports = router;