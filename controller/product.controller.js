
const Product = require("../models/product.model.js")



const getProduct = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const getSingleProduct =async (req, res) => {
    try {
        // getting the id in the url
        const {id } = req.params
        const products = await Product.findById(id)
        res.status(200).json(products)
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
}


// Adding data in the database
// res is response given by the program
// req is the input by the user
const addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const updateProduct = async (req,res)=>{
    try{
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        if (!product){
            res.status(500).json({message:"Product not found"})
            return
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    }
    catch(e){
        res.status(500).json({message:e.message})
    }
}


const deleteProduct = async (req,res)=>{
    try{
        const {id} = req.params
        console.log(90)
        const product = await Product.findByIdAndDelete(id)
        console.log(90)
        if (!product){
            res.status(500).json({message:"Product not found"})
            return
        }
        res.status(200).json({message:"Product deleted"})
    }
    catch(e){
        res.status(500).json({message:e.message})
    }
}


module.exports ={
    getProduct,
    getSingleProduct,
    addProduct,
    updateProduct,
    deleteProduct
}