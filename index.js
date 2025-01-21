/**
 * The main application module.
 * @module app
 */

 /**
 * Middleware to handle shop routes.
 * @name useShopRoutes
 * @function
 * @memberof module:app
 * @inner
 * @param {string} path - The base path for the shop routes.
 * @param {function} middleware - The middleware function to handle shop routes.
 */

 /**
 * Middleware to handle cart routes.
 * @name useCartRoutes
 * @function
 * @memberof module:app
 * @inner
 * @param {string} path - The base path for the cart routes.
 * @param {function} middleware - The middleware function to handle cart routes.
 */

 /**
 * Middleware to handle product routes.
 * @name useProductRoutes
 * @function
 * @memberof module:app
 * @inner
 * @param {string} path - The base path for the product routes.
 * @param {function} middleware - The middleware function to handle product routes.
 */

 /**
 * Middleware to handle admin routes.
 * @name useAdminRoutes
 * @function
 * @memberof module:app
 * @inner
 * @param {string} path - The base path for the admin routes.
 * @param {function} middleware - The middleware function to handle admin routes.
 */

 /**
 * Starts the server and listens on the specified port.
 * @name listen
 * @function
 * @memberof module:app
 * @inner
 * @param {number} port - The port number to listen on.
 * @param {function} callback - The callback function to execute once the server is connected.
 */
const app = require('./utils/app');

app.use('/', require('./routes/shop'));

app.use('/', require('./routes/cart'));

app.use('/', require('./routes/product'));

app.use('/', require('./routes/admin'));

app.listen(3033, () => {
    console.log('server is connected at http://localhost:3033/');
});