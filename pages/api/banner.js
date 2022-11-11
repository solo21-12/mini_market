import Banner from "../../database/models/banner";
import connection from "../../database/connection/connection";
export default async function handler(req, res) {
  connection()
  const result = await Banner.find()
  res.send(result)
  
}