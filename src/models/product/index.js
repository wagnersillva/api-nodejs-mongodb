const mongoose = require('mongoose');

const Product = mongoose.model('Product', {
    name: String,
    cod: String, 
    quantity: Number,
    inStock: Boolean,
    categories: String
})

module.exports = Product;