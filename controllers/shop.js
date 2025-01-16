const db = require('../config/database');

// Controller to fetch all products for the shop page
exports.getShopPage = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products');
    res.render('index', { products: rows });
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).send('Error retrieving products');
  }
};

// Controller to fetch a single product by ID
exports.getProductDetails = async (req, res) => {
  const productId = req.params.id;

  try {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [productId]);

    if (rows.length > 0) {
      res.render('product-details', { product: rows[0] });
    } else {
      res.status(404).send('Product not found');
    }
  } catch (err) {
    console.error('Error fetching product details:', err);
    res.status(500).send('Error retrieving product details');
  }
};