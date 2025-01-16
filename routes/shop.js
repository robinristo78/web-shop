const express = require('express');
const router = express.Router();
const shopController = require('../controller/shop');

// Route for displaying all products on the shop page
router.get('/', shopController.getShopPage);

// Route for displaying details of a single product
router.get('/product/:id', shopController.getProductDetails);

module.exports = router;