const db = require('../utils/db')

const getProducts = (req, res) => {
  db.query('SELECT * FROM products', (error, result) => {
      if(error) {
          console.log(error);
          return;
      }
      res.render('shop/index', {
          products: result
      });
  });
};

module.exports = {
  getProducts
}