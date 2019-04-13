const express = require('express');
const router = express.Router();
const Product = require('../models/product');
/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find((err, result) => {
    let productChunks = [];
    let chunkSize = 3;

    for(var i = 0; i < result.length; i += chunkSize) {
      productChunks.push(result.slice(i, i + chunkSize));
    }

    console.log(chunkSize);

    res.render('shop/index', { title: 'Shopping Cart', products: productChunks });
  });
});

module.exports = router;
