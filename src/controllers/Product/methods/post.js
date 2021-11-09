const Model = require('../../../models');
const productModel = Model.Product;
const { fieldsEmpty, fieldsTypes, httpCod, getDate } = require('../utils');
const { badRequest, successCreated, errorServer } = httpCod;

const post = async (req, res) => {
    const { name, cod, quantity, category, image } = req.body;
    const attributeVefiry = { name, cod, quantity };
    const product = { category: category ? category : "Default", image: image ? image : "" };
    try {
        if(fieldsEmpty(attributeVefiry).isEmpty) {
            res.status(badRequest).json({ status:badRequest, message: fieldsEmpty(attributeVefiry).message });
        } else {
            if(fieldsTypes(attributeVefiry).isNotType){
                res.status(badRequest).json({ status: badRequest, message: fieldsTypes(attributeVefiry).message });
            } else {
                let product_values = { ...attributeVefiry, ...product, data_create: getDate(), last_update: null }
                let productCreated;
                await productModel.create(product_values).then(e => productCreated = e )
                res.status(successCreated).json({status: successCreated, message: "Product created successfully!", data: productCreated })
            }
        }
    } catch (err) {
        res.status(errorServer).json({ status: errorServer, message: "There was an error on the server" });
    }
}


module.exports = post