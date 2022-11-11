import Bags from "../../../../database/models/bags"
import connection from "../../../../database/connection/connection"

export default async function handler(req, res) {
  async function bagAdder(data) {
    const product = new Bags({
      Background: data.Background,
      desc: data.desc,
      option: data.option,
      title: data.title,
      id: data.id,
      price: data.price,
      body: data.body,
      stock: data.stock
    })
    try {
      const result = await product.save()
      return (result);
    } catch (error) {
      return (error);
    }
  }
  await connection()
  if (req.method === "GET") {
    const result = await Bags.find()
    res.status(200).send(
      result
    )
  }
  if (req.method === 'POST') {
   const result = await bagAdder({
      Background: req.body.Background,
      desc: req.body.desc,
      option: req.body.option,
      title: req.body.title,
      id: req.body.id,
      price: req.body.price,
      body: req.body.body,
      stock: req.body.stock

    })
    res.status(200).send(result)
  }

}