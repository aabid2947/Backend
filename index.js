
// importing the dependencies
const mongoose = require('mongoose')
const express = require('express')
const Product = require('./models/product.model.js')
const ProductRoutes = require('./routes/product.route.js')


const app = express()

// attempting to use express.json() middleware in Express 
// application to parse JSON data from incoming requests
// middleware
app.use(express.json())



// Connecting to mongodb atlas database
mongoose.connect("connection string")
    .then(() => {
        console.log("connected")
        // running the server
        app.listen(3000, () => {
            console.log(89)
        })
    })
    .catch((e) => {
        console.log(e)
    })

// routes
app.use("/api/products",ProductRoutes)

