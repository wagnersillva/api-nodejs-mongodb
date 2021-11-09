const mongoose = require('mongoose');

const Product = mongoose.model('Product', {
    name: String,
    cod: String, 
    quantity: Number,
    category: String,
    image: String,
    data_create: String,
    last_update: String,
})

module.exports = Product;