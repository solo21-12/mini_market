import { Schema, model, models } from "mongoose";
const categore = new Schema({
  id: String,
  name: String,
  Background: String,
  link: String
})

const Categore = models.categore || model("categore", categore)

export default Categore;