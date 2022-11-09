const mongoose = require("mongoose")
const shoeSchema = mongoose.Schema({
Shoe_Name: String,
Shoe_Company: String,
Shoe_Size: Number,
Shoe_Rating: Number
})
module.exports = mongoose.model("shoe",
shoeSchema)