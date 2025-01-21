const db = require('../utils/db');

const getProductById = (req, res) => {
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
};

module.exports = {
    getProductById
} 