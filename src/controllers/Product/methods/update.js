const Model = require('../../../models');
const productModel = Model.Product;
const { fieldsTypes, getDate } = require('../utils');
const httpCod = require('../../../tools/codeHTTP');
const { badRequest } = require('../../../tools/codeHTTP');
const { notFound, successCreated, errorServer } = httpCod;

 const getProduct = (id) => {
     return new Promise( async (resolve, reject) => {
         try {
            const product = await productModel.findById(`${id}`);
            resolve({status: true, data: product}) 
         } catch (err) {
            reject({status: false});
         }  
     })
}

const update = async (req, res) => {
    const { name, cod, quantity, category, image } = req.body;
    const attributeVefiry = { name, cod, quantity };
    const currentProduct = await getProduct(req.params.id).catch(e => { return e })
    if(currentProduct.status){
        try {
            Object.keys(attributeVefiry).map(key => {
                if(!attributeVefiry[key]){ attributeVefiry[key] = currentProduct.data[key] }
            })
            const product = { category: category ? category:currentProduct?.data?.category, image: image ? image : currentProduct?.data?.image }
            console.log(currentProduct.data)
            console.log(attributeVefiry)
            console.log(product)
            if(fieldsTypes(attributeVefiry).isNotType){
                res.status(badRequest).json({ status: badRequest, message: fieldsTypes(attributeVefiry).message });
            } else {
                let product_values = { ...attributeVefiry, ...product, data_create: currentProduct?.data?.data_create, last_update: getDate() }
                productModel.findByIdAndUpdate(req.params.id, {$set: product_values }, {new: true}, function(err, data){
                    if(err){
                        res.status(badRequest).json({ status: badRequest, message: "Product edit failed", err});
                    }
                    if(data){
                        const __date = new Date();
                        res.status(successCreated).json({status: successCreated, message: "Product edited successfully!", data})
                    }
                })
            }
        } catch (err) {
            res.status(errorServer).json({ status: errorServer, message: "There was an error on the server", err});
        }
    } else {
        res.status(notFound).json({ status: notFound, message: "Product not found" });
    }
}


module.exports = update