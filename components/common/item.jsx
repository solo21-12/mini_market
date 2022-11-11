import React from 'react'
import { useStateContext } from "../../context/stateContext"
import Image from 'next/image';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { ImCancelCircle } from "react-icons/im"

const Item = (props) => {
 const {Name,price,background,id,quantity,product}= props
 const {toggleCartItemQuanitity,onRemove} = useStateContext()
 const mystyle = {
  backgroundImage: `url(${background})`,
  fontFamily: "Arial"
};
  return (
    <div className='   shadow-gray-300 max-h-56 flex flex-row  gap-10  lg:mb-20 mb-10 shadow-sm rounded-md'>
      <div className='w-1/2 sigle10 rounded-xl md:ml-5' style={mystyle}>
        </div>
      <div className=' w-1/2  flex flex-col justify-between'>
        <div className='md:text-base text-sm   flex flex-row justify-between'>
          <p className='  '>{Name} </p>
          <p> $ {price} </p>
        </div>
        <div className='  md:gap-14 gap-2 pb-10   flex flex-row justify-between'>
        <div className=' flex flex-row gap-8 w-1/6 lg:text-xl'>
        <p className=' flex flex-row gap-8 p'>
          <span className='minus'>
            <AiOutlineMinus className=' cursor-pointer' fill='black' onClick={()=>toggleCartItemQuanitity(id,"dec")}  />
          </span>
          <span className='text-sm md:text-base lg:text-lg'>{quantity}</span>
          <span className='plus'>
            <AiOutlinePlus className=' cursor-pointer '  onClick={()=>toggleCartItemQuanitity(id,"inc")}/>
          </span>
        </p>
      </div>
      <button onClick={()=>onRemove(product)}>
      <ImCancelCircle className=' text-red-600 self-end cursor-pointer text-xl mr-5' />
      </button>
        </div>
      </div>
    </div>);
}
export default Item;