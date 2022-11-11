import { Schema, model, models } from "mongoose";
const mobile = new Schema({
  Background: String,
  desc: Array,
  option: String,
  title: String,
  id: Number,
  price: Number,
  body: String,
  stock: Number
})



const Mobile =  models.mobile || model("mobile", mobile);
export default Mobile;