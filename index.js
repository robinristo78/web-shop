const app = require('./utils/app');

const shopRoutes = require('./routes/shop');
const cartRoutes = require('./routes/cart');
const productRoutes = require('./routes/product');

app.use('/', shopRoutes);

app.use('/', cartRoutes);

app.use('/', productRoutes);

app.listen(3033, () => {
    console.log('server is connected at localhost:3033');
});