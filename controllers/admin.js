const db = require('../utils/db');

const getAddProduct = (req, res) => {
    res.render('admin/add-product');
};

const postAddProduct = (req, res) => {
    const { title, price, description, image } = req.body;

    db.query(
        'INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)',
        [title, price, description, image],
        (error, result) => {
            if (error) {
                console.error('Database error:', error);
                return res.status(500).send('Internal server error');
            }

            res.redirect('/');
        }
    );
};

const postDeleteProduct = (req, res) => {
    const id = req.params.id;

    db.query('DELETE FROM products WHERE id = ?', [id], (error, result) => {
        if (error) {
            console.error('Database error:', error);
            return res.status(500).send('Internal server error');
        }

        res.redirect('/');
    });
};

const getEditProduct = (req, res) => {
    const id = req.params.id;

    db.query('SELECT * FROM products WHERE id = ?', [id], (error, result) => {
        if (error) {
            console.error('Database error:', error);
            return;
        }

        if (result.length === 0) {
            return res.status(404).send('Product not found');
        }

        res.render('admin/edit-product', {
            product: result[0],
        });
    });
};

const postEditProduct = (req, res) => {
    const { productId, title, price, description } = req.body;

    db.query(
        'UPDATE products SET title = ?, price = ?, description = ? WHERE id = ?',
        [title, price, description, productId],
        (error, result) => {
            if (error) {
                console.error('Database error:', error);
                return res.status(500).send('Internal server error');
            }

            res.redirect('/');
        }
    );
};

module.exports = {
    getAddProduct,
    postAddProduct,
    postDeleteProduct,
    getEditProduct,
    postEditProduct,
};