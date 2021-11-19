const Model = require('../../../models');
const productModel = Model.Product;
const httpCod = require('../../../tools/codeHTTP');
const { errorServer, requestSuccess } = httpCod;
const find = async (req, res) => {
    try {
        const products = await productModel.findOne(req.query);
        res.status(requestSuccess).json({ status: 200, data: products })
    } catch (err) {
        res.status(errorServer).json({ status: errorServer, message: "There was an error on the server" });
    }
}

module.exports = find;