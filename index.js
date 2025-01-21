const express = require('express');

const db = require('./utils/db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    db.query('SELECT * FROM products', (error, result) => {
        if(error) {
            console.log(error);
            return;
        }
        
        result.forEach(product => {
            if (!product.imageUrl) {
                product.imageUrl = 'public/images/placeholder.jpg';
            }
        });

        res.render('shop/index', {
            products: result
        });
    });
});

app.get('/cart', (req, res) => {
    res.render('shop/cart');
});

app.get('/add-product', (req, res) => {
    res.render('shop/add-product');
});

app.post('/add-product', (req, res) => {
    const name = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const image = req.body.image;

    db.query('INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)', [name, price, description, image], (error, result) => {
        if(error) {
            console.log(error);
            return res.status(500).send('Internal server error');
        }

        res.redirect('/');
    });
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