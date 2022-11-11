import Watch from "../../../../database/models/watches"
import connection from "../../../../database/connection/connection"

export default async function handler(req, res) {
  await connection()
  const result = await Watch.find()
  res.status(200).send(
    result
  )
  async function watchAdder(data) {
    const product = new Watch({
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
    const result = await watchAdder({
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