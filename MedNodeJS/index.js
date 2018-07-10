// Import dependencies

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {mongoose} = require('./db.js');

var productController = require('./controllers/productController.js');

var app= express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200'}));
app.listen(3000, () => console.log('API running on localhost:3000'));

app.use('/products',productController);