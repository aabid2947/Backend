const express = require('express')
const router = express.Router()
const {getProduct,getSingleProduct,updateProduct,addProduct,deleteProduct} = require('../controller/product.controller.js')

// getting data from database
router.get('/',getProduct )

// getting data from id
router.get('/:id',getSingleProduct)

// adding data 
router.post('/',addProduct)

//update products
router.put('/:id',updateProduct)

// deleter product 
router.delete('/:id',deleteProduct)




module.exports = router