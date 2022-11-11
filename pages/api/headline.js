import Headline from "../../database/models/headline";
import connection from "../../database/connection/connection";

export default async function handler(req, res) {
  connection()
  const result = await Headline.find()
  res.send(result)

}