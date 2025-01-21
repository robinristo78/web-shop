const app = require('./utils/app');

const shopRoutes = require('./routes/shop');
const cartRoutes = require('./routes/cart');
const productRoutes = require('./routes/product');

app.use('/', shopRoutes);

function getProducts(callback) {
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

        callback(result);
    });
}

app.get('/admin', (req, res) => {
    getProducts((products) => {
        res.render('shop/index', {
            products: products,
            isAdmin: true
        });
    });
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


app.use('/', cartRoutes);

app.use('/', productRoutes);


app.listen(3033, () => {
    console.log('server is connected at http://localhost:3033/');
});