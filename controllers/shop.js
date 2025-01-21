const db = require('../utils/db')

/**
 * Retrieves all products from the database and ensures each product has an image URL.
 * If a product does not have an image URL, a placeholder image URL is assigned.
 *
 * @param {function} callback - The callback function to execute with the result.
 */
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

/**
 * Controller function to load the main page of the shop.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const loadMainPage = (req, res) => {
  getProducts((products) => {
      res.render('shop/index', {
          products: products,
          isAdmin: false
      });
  });
};

/**
 * Loads the admin page with a list of products.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const loadAdminPage = (req, res) => {
  getProducts((products) => {
      res.render('shop/index', {
          products: products,
          isAdmin: true
      });
  });
};

module.exports = {
  loadMainPage,
  loadAdminPage
}