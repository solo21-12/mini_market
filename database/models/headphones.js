import { Schema, model, models } from "mongoose";
const headphone = new Schema({
  Background: String,
  desc: Array,
  option: String,
  title: String,
  id: Number,
  price: Number,
  body: String,
  stock: Number
})



const Headphone =  models.headphone || model("headphone", headphone);
export default Headphone;