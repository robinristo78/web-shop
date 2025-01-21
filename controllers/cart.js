/**
 * Renders the shopping cart page.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const showCart = (req, res) => {
    res.render('shop/cart');
};

module.exports = {
    showCart
} 