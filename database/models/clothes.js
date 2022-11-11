import { Schema, model, models } from "mongoose";

const clothe = new Schema({
  Background: String,
  desc: Array,
  option: String,
  title: String,
  id: Number,
  price: Number,
  body: String,
  stock: Number
})



const Clothe = models.clothe || model("clothe", clothe);
export default Clothe;