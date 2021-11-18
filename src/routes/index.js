const { Router } = require('express')
const router = Router();
const { Product, Image } = require('../controllers')

router.get('/product/', Product.find)

router.get('/product/:id', Product.findById)

router.post('/product/create', Product.post)  

router.post('/image/upload', Image.upload, Image.post)  

module.exports = router;