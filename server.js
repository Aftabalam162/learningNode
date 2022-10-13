const express = require('express');
const path = require('path');
const data = require('./products');
 
const app = express();
 
app.get('/', (req,res) => {
    res.send("<h1>Home</h1> <a href='/api/products'>Products</a>");
})

app.get('/api/products', (req, res) => {
    const products = data.map((product) => {
        const {id, title, price} = product;
        return {id, title, price}
    });
    res.json(products);
})

app.get('/api/products/:productID', (req, res)=> {
    const singleProduct = data.find(product => product.id === Number(req.params.productID));

    if(!singleProduct) {
        res.status(404).send('<h1>Product Not Found!</h1>');
    }

    res.json(singleProduct);
});

app.get('/api/v1/query', (req,res) => {
    let sortedProducts = [...data];
    const {search, limit} = req.query;

    if(search) {
        sortedProducts = sortedProducts.filter((p) => p.title.startsWith(search));
    }

    if(limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if(sortedProducts.length < 1) {
       return res.status(200).send('<h1>No such product found!</h1>');
    }

    res.status(200).json(sortedProducts);
})


app.listen(5005,() => console.log('Server started....'))
