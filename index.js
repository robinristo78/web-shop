const app = require('./utils/app');

app.use('/', require('./routes/shop'));

app.use('/', require('./routes/cart'));

app.use('/', require('./routes/product'));

app.use('/', require('./routes/admin'));

app.listen(3033, () => {
    console.log('server is connected at http://localhost:3033/');
});