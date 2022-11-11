import { Schema, model, models } from "mongoose";


const Bags = models.bag || model("bag", new Schema({
  Background: String,
  desc: Array,
  option: String,
  title: String,
  id: Number,
  price: Number,
  body: String,
  stock: Number
}));
export default Bags;