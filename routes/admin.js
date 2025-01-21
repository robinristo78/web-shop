const express = require('express');
const router = express.Router();

/**
 * @module routes/admin
 * @requires ../controllers/admin
 * 
 * This module sets up the routes for the admin section of the web shop.
 * It uses the adminController to handle the various admin-related operations.
 */
const adminController = require('../controllers/admin');

router.get('/add-product', adminController.getAddProduct);

router.post('/add-product', adminController.postAddProduct);

router.post('/delete-product/:id', adminController.postDeleteProduct);

router.get('/edit-product/:id', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

module.exports = router;
