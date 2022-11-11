import { Schema, model, models } from "mongoose";
const Watch = models.watche ||  model("watche", new Schema({
  Background: String,
  desc: Array,
  option: String,
  title: String,
  id: Number,
  price: Number,
  body: String,
  stock: Number
}));
export default Watch;