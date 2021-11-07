const mongoose = require('mongoose');

const Product = mongoose.model('Product', {
    name: String,
    cod: String, 
    quantity: Number,
    categories: String
})

module.exports = Product;