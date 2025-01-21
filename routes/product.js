const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

router.get('/product/:id', productController.getProductById);

module.exports = router;