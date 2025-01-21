const express = require('express');
const path = require('path');


const app = express();

app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'ejs');


app.use('/public', express.static('public'));


module.exports = app;
