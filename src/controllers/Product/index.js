const post = require('./methods/post');
const find = require('./methods/find');
const findById = require('./methods/findById');

const Product = {
    post,
    find,
    findById
}

module.exports = Product;