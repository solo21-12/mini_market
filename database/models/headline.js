import { Schema, model, models } from "mongoose"
const Headline = models.banner || model("headline", new Schema({
  Background: String,
  smallText: String
}))

export default Headline;