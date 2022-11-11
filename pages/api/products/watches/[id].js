import Watch from "../../../../database/models/watches"
import connection from "../../../../database/connection/connection"
export default async function handler(req,res){
  const id = req.query.id
  await connection()
  if (req.method === "GET") {
    const result = await Watch.find({
    "id":id
    })
    res.status(200).send(
      result
    )
  }
}