const db = require('../utils/db');

/**
 * Retrieves a product by its ID and renders the product page.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.params - The parameters of the request.
 * @param {string} req.params.id - The ID of the product to retrieve.
 * @param {Object} res - The response object.
 */
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