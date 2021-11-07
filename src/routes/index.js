const { Router } = require('express')
const router = Router();
const { Product } = require('../controllers')

router.post('/product/create', Product.post)  

module.exports = router;