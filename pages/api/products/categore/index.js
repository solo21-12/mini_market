import Categore from "../../../../database/models/categore";
import connection from "../../../../database/connection/connection"
export default async function handler(req, res) {
  await connection()
  const result = await Categore.find()
  res.status(200).send(result)
  const categoreAdder = async (data) => {
    const cat = new Categore({
      id: data.id,
      name: data.name,
      Background: data.Background,
      link: data.link
    })
    return await cat.save()
  }
  if (req.method === "POST") {
    const result = await categoreAdder({
      id: req.body.id,
      name: req.body.name,
      Background: req.body.Background,
      link: req.body.link
    })
    res.status(200).send(result)
  }
}