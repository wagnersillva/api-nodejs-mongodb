const findByQuery = require('./findByQuery')
const findAll = require('./findAll')

const find = async (req, res) => {
    let hasProperty = Object.keys(req.query).length
    if(hasProperty){
        findByQuery(req, res);
    } else {
        findAll(req, res);
    }
}

module.exports = find;