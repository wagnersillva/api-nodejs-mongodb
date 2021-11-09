const { Router } = require('express')
const router = Router();
const { Product, Image } = require('../controllers')

router.post('/product/create', Product.post)  

router.post('/product', Product.findAll)  

router.post('/image/upload', Image.upload, Image.post)  

module.exports = router;