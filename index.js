const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('This is in the middleware');
});

app.listen(3033, () => {
    console.log('server is connected at localhost:3033');
});