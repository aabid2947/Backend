
// importing the dependencies
const mongoose = require('mongoose')
const express = require('express')
const Product = require('./models/product.model.js')


const app = express()

// attempting to use express.json() middleware in Express 
// application to parse JSON data from incoming requests
app.use(express.json())



// Connecting to mongodb atlas database
mongoose.connect("put your connection string")
    .then(() => {
        console.log("connected")
        // running the server
        app.listen(3000, () => {
            console.log(89)
        })
    })
    .catch(() => {
        console.log("failed")
    })


app.get('/', (req, res) => {
    res.send("hello90 jkworld")
})

// getting data from database
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
})

app.get('/api/product/:id', async (req, res) => {
    try {
        // getting the id in the url
        const {id } = req.params
        const products = await Product.findById(id)
        res.status(200).json(products)
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
})

// Adding data in the database
// res is response given by the program
// req is the input by the user
app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
})


// update API
app.put('/api/product/:id',async (req,res)=>{
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
})

// delete
app.delete('/api/product/delete/:id',async (req,res)=>{
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
})