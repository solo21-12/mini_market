// Next.js API route support: https://nextjs.org/docs/api-routes/introduction4
import adder,{categoreAdder} from "../../database/productAdder"

export default function handler(req, res) {
 adder()
 categoreAdder()
  res.send(req.body)
}
