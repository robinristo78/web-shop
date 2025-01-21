const express = require('express');

const db = require('./utils/db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static('public'));

app.set('view engine', 'ejs');

app.get('/add-product', (req, res) => {
    res.render('shop/add-product');
});

app.use('/', require('./routes/shop'));
app.use('/', require('./routes/cart'));

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

app.post('/delete-product/:id', (req, res) => {
    const id = req.params.id;

    db.query('DELETE FROM products WHERE id = ?', [id], (error, result) => {
        if(error) {
            console.log(error);
            return res.status(500).send('Internal server error');
        }

        res.redirect('/');
    });
});

app.post('/edit-product', (req, res) => {
    const id = req.body.productId;
    const name = req.body.title;
    const price = req.body.price;
    const description = req.body.description;

    db.query('UPDATE products SET title = ?, price = ?, description = ? WHERE id = ?', [name, price, description, id], (error, result) => {
        if(error) {
            console.log(error);
            return res.status(500).send('Internal server error');
        }

        res.redirect('/');
    });
});

app.get('/edit-product/:id', (req, res) => {
    const id = req.params.id;

    db.query('SELECT * FROM products WHERE id = ?', [id], (error, result) => {
        if(error) {
            console.log(error);
            return;
        }
        res.render('shop/edit-product', {
            product: result[0]
        });
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