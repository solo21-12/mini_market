import { Schema, model, models } from "mongoose"

const Banner = models.banner || model("banner", new Schema({
  Background: String,
  smallText: String,
  bigText: String,
  body: String,
  btnText: String,
  discount: String,
  largerText1: String,
  largerText2: String,
  salesTime: String,
  link: String
}))

export default Banner;