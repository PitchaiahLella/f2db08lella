const mongoose = require("mongoose")
const shoeSchema = mongoose.Schema({
Shoe_Name: {type: String,required: [true, 'Name of the shoe cannot be empty']}, 
Shoe_Company: {type: String,required: [true, 'shoe company cannot be empty']}, 
Shoe_Size: {type: Number,required: [true, 'shoe size cannot be empty']}, 
Shoe_Rating: {type: Number,required: [true, 'shoe rating cannot be empty']} 
})
module.exports = mongoose.model("shoe",
shoeSchema)