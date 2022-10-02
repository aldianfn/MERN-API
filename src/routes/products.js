const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products');

// Get Products
router.get('/products', productsController.getAllProducts);

// Create Product
router.post('/product', productsController.createProduct);

// router.put('/products/:id');
// router.delete('/products/:id');


module.exports = router;