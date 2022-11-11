
import { Schema, model, models } from "mongoose";


const Laptop = models.laptop || model("laptop", new Schema({
  Background: String,
  desc: Array,
  option: String,
  title: String,
  id: Number,
  price: Number,
  body: String,
  stock: Number
}));
export default Laptop;