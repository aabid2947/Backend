const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(

    {
        name: {
            type: String,
            required: [true, "Plese enter the product"]
        }
        ,

        quantity: {
            type: String,
            required: true,
            default: 0
        },
        price:{
            type:Number,
            required:true,
            default:0
        },
        image:{
            type:String,
            required:false
        }

    },
    // Provide two extra field 
    // when created and when updated
    {
        timestamp:true
    }
)

const Product = mongoose.model("Product",ProductSchema)

module.exports = Product