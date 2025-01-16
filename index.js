const express = require('express');

const db = require('./utils/db');

const app = express();

app.use('/public', express.static('public'));

app.use((req, res, next) => {
    console.log('Middleware 1');
    next();
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    db.query('SELECT * FROM products', (error, result) => {
        if(error) {
            console.log(error);
            return;
        }
        res.render('index', {
            products: result
        });
    });
});

app.get('/cart', (req, res) => {
    res.render('cart');
});

app.get('/product/:id', (req, res) => {
    const id = req.params.id;

    db.query('SELECT * FROM products WHERE id = ?', [id], (error, result) => {
        if(error) {
            console.log(error);
            return;
        }
        res.render('product', {
            product: result[0]
        });
    });
});

app.listen(3033, () => {
    console.log('server is connected at localhost:3033');
});