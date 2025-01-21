const mysql = require('mysql2');

/**
 * Establishes a connection to the MySQL database.
 * 
 * @constant {object} connection - The MySQL connection object.
 * @property {string} host - The hostname of the database you are connecting to.
 * @property {string} user - The MySQL user to authenticate as.
 * @property {string} password - The password of that MySQL user.
 * @property {string} database - The name of the database to use.
 */
const connection = mysql.createConnection({
    host: '192.168.36.100',
    user: 'dbuser',
    password: 'qwerty1234',
    database: 'webshop'
});

connection.connect((err) => {
    if(err) throw err;
    console.log('MySQL server is connected');
});

module.exports = connection;