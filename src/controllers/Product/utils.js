const { PropertyHasValue } = require('../../tools/hasValue')
const { isTypeOf } = require('../../tools/isTypeOf')
const getDate = require('../../tools/date')

const ListTypes = {
    name: 'string',
    cod: 'string',
    category: 'string',
    quantity: 'number'
}

const httpCod = {
    requestSuccess: 200,
    successCreated: 201,
    badRequest: 400,
    errorServer: 500
}

const fieldsEmpty = (product) => {
    if(PropertyHasValue(product).isEmpty) {
        return { isEmpty: true,  message: PropertyHasValue(product).values };
    } else {
        return { isEmpty: false }
    }
}

const fieldsTypes = (product) => {
    const params = [];
    Object.keys(product).map(key => {
        params.push({ key: product[key], value: ListTypes[key], entity: key })
    })
    if (isTypeOf(params).isNotType){
        return { isNotType: true,  message: `${isTypeOf(params).values}.` };
    } else {
        return { isNotType: false };
    }
}

module.exports = { fieldsEmpty, fieldsTypes, httpCod, getDate }