const Model = require('../../../models');
const productModel = Model.Product;
const { httpCod } = require('../utils');
const { errorServer, requestSuccess } = httpCod;

const findAll = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
        res.status(requestSuccess).json({ status: 200, data: product })
    } catch (err) {
        res.status(errorServer).json({ status: errorServer, message: "There was an error on the server" });
    }
}

module.exports = findAll;