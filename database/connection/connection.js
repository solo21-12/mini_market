import mongoose from "mongoose"

export default async function connection (){
  mongoose.connect("mongodb+srv://admin-dawit:Dawit0945557307@cluster0.w7egu4m.mongodb.net/soloMArket")
}
