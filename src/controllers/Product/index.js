const post = require('./methods/post');
const find = require('./methods/find');
const findById = require('./methods/findById');
const update = require('./methods/update');

const Product = {
    post,
    find,
    findById,
    update
}

module.exports = Product;