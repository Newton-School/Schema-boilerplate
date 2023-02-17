const { number } = require("joi");
var mongoose= require("mongoose");

var productSchema= mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    Quantity:{
        type: Number,
        required:true
    },
    Price:{
        type: Number,
        required:true
    },
    instock:{
        type: String,
        eneum: ['Yes', 'No']
    }
    
});

module.exports =mongoose.model("products",productSchema);