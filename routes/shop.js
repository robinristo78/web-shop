const express = require('express');
const router = express.Router();

/**
 * @module shopController
 * @description This module handles the shop-related routes and their corresponding controller actions.
 * @requires ../controllers/shop
 */
const shopController = require('../controllers/shop');

router.get('/', shopController.loadMainPage);
router.get('/admin', shopController.loadAdminPage);

module.exports = router;