import Laptop from "../../../../database/models/laptop"
import connection from "../../../../database/connection/connection"

export default async function handler(req, res) {
  await connection()
  const result = await Laptop.find()
  res.status(200).send(
    result
  )
  async function LaptopAdder(data) {
    const product = new Laptop({
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
    const result = await LaptopAdder({
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