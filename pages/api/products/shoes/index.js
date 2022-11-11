import Shoes from "../../../../database/models/shoes"
import connection from "../../../../database/connection/connection"

export default async function handler(req, res) {
  await connection()
  const result = await Shoes.find()
  res.status(200).send(
    result
  )
  async function shoesAdder(data) {
    const product = new Shoes({
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
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
  if(req.method === "POST"){
    const result = await shoesAdder({
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