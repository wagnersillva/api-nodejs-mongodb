const Model = require('../../models');
const productModel = Model.Product;
const { fieldsEmpty, fieldsTypes, httpCod } = require('./utils');
const { badRequest, requestSuccess, successCreated, errorServer } = httpCod;

const post = async (req, res) => {
    const { name, cod, quantity, category } = req.body;
    const product = { name, cod, quantity, category: category ? category: "Default"};
    try {
        if(fieldsEmpty(product).isEmpty) {
            res.status(badRequest).json({ status:badRequest, message: fieldsEmpty(product).message });
        } else {
            if(fieldsTypes(product).isNotType){
                res.status(badRequest).json({ status: badRequest, message: fieldsTypes(product).message });
            } else {
                let productCreated;
                await productModel.create(product).then(e => productCreated = { name: e.name, cod: e.cod, quantity: e.quantity } )
                res.status(successCreated).json({status: successCreated, message: "Product created successfully!", productCreated })
            }
        }
    } catch (err) {
        res.status(errorServer).json({ status: errorServer, message: "There was an error on the server" });
    }
}

const findAll = async (req, res) => {
    try {
        res.status(requestSuccess)
    } catch (err) {
        res.status(errorServer).json({ status: errorServer, message: "There was an error on the server" });
    }
}

const Product = {
    post
}

module.exports = Product;