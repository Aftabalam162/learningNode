const authorize = require('./authorize');
const logger= require('./logger');
const morgan = require('morgan');

const app = express();
const express = require('express');

app.use(morgan('tiny'));

app.get('/', (req, res)=> {

    res.send('Home');
})

app.get('/about', (req, res) => {
    res.send('About');
});

app.get('/api/products', (req, res)=> {
    console.log(req.user);
    res.send('Products');
})

app.get('/api/items', (req, res) => {
    res.send('Items');
});

app.listen(5000, console.log('server running...'));