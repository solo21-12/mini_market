import Input from "../components/common/input"
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"

const Options = () => {
  return (<div className=" ">
    <p className=" icons text-teal-700 font-serif mt-5">Add you options</p>
    <div className=" w-1/4 ">
      <Input
        ids="amount"
        type="text"
        placeHolder="Amount" />
        <Input
        ids="color"
        type="text"
        placeHolder="Color" />
        <Input
        ids="ram"
        type="text"
        placeHolder="Ram" />
        <Input
        ids="storage"
        type="text"
        placeHolder="Storage" />
        <button className=' bg-yellow-300 px-2 h-2 mt-2 lg:h-8 rounded-md w-1/5 '>Add</button>

    </div>
  </div>);
}

export default Options;