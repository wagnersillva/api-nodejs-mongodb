const Model = require('../../../models');
const productModel = Model.Product;
const { httpCod } = require('../utils');
const { errorServer, requestSuccess } = httpCod;

const findAll = async (req, res) => {
    try {
        const products = await productModel.find();
        res.status(requestSuccess).json({ status: 200, data: products })
    } catch (err) {
        res.status(errorServer).json({ status: errorServer, message: "There was an error on the server", products });
    }
}

module.exports = findAll;