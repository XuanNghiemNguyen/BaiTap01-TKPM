const { Schema, model} = require('mongoose')

const ProductSchema = new Schema(
  {
    _id: String,
    name: String,
    price: Number,
    brand: String,
    producer: String,
    description: String,
    imageUrl: String
  },
  {
    versionKey: false
  }
)
module.exports = model('Product', ProductSchema)
