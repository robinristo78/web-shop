const db = require('../utils/db')

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

const loadMainPage = (req, res) => {
  getProducts((products) => {
      res.render('shop/index', {
          products: products,
          isAdmin: false
      });
  });
};

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