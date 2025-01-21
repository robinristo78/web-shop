/**
 * @fileoverview Utility module for initializing the Express application.
 * @module utils/app
 */

 /**
    * Express application instance.
    * @type {import('express').Application}
    */

 /**
    * Sets the directory for the views and the view engine.
    * @param {string} views - Path to the views directory.
    * @param {string} viewEngine - Template engine to use.
    */

 /**
    * Serves static files from the 'public' directory.
    * @param {string} publicPath - Path to the public directory.
    */

 /**
    * Parses URL-encoded bodies.
    * @param {Object} options - Options for parsing URL-encoded bodies.
    * @param {boolean} options.extended - Use the extended version of the querystring library.
    */
const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'ejs');

app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended: true }));

module.exports = app;
