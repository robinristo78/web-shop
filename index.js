const express = require('express');

const db = require('./utils/db');

const app = express();

app.use('/public', express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    db.query('SELECT * FROM products', (error, result) => {
        if(error) {
            console.log(error);
            return;
        }
        res.render('shop/index', {
            products: result
        });
    });
});

app.get('/cart', (req, res) => {
    res.render('shop/cart');
});

app.get('/product/:id', (req, res) => {
    const id = req.params.id;

    db.query('SELECT * FROM products WHERE id = ?', [id], (error, result) => {
        if(error) {
            console.log(error);
            return;
        }
        res.render('shop/product', {
            product: result[0]
        });
    });
});

app.listen(3033, () => {
    console.log('server is connected at http://localhost:3033/');
});