
// importing the dependencies
const mongoose = require('mongoose')
const express = require('express')
const Product = require('./models/product.model.js')


const app = express()

// attempting to use express.json() middleware in Express 
// application to parse JSON data from incoming requests
app.use(express.json())



// Connecting to mongodb atlas database
mongoose.connect("put connection string "
.then(()=>{
    console.log("connected")
    // running the server
    app.listen(3000,()=>{
        console.log(89)
    })
})
.catch(()=>{
    console.log("failed")
})


app.get('/',(req,res)=>{
    res.send("hello90 jkworld")
})

// getting data from database
app.get('/api/products', async (req,res)=>{
    try{
    const products = await Product.find({})
    res.status(200).json(products)
    }
    catch(e){
    res.status(500).json({message:e.message})

    }
})

// Adding data in the database
// res is response given by the program
// req is the input by the user
app.post('/api/products',async (req,res)=>{
   try{
   const product =  await Product.create(req.body)
   res.status(200).json(product)
   }
   catch(e){
    res.status(500).json({message:e.message})
   }
})