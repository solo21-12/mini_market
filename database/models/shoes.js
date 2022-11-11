import { Schema, model, models } from "mongoose";

const shoes = new Schema({
  Background: String,
  desc: Array,
  option: String,
  title: String,
  id: Number,
  price: Number,
  body: String,
  stock: Number
})



const Shoes =  models.shoes || model("shoes", shoes);
export default Shoes;