const mysql = require('mysql2');

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