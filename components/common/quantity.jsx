import React from 'react'
import { useStateContext } from '../../context/stateContext';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'


const Quantity = () => {
  const {qty,handleDecressQty, handleIncressQty }= useStateContext();
  return ( 
    <div className=' flex flex-row gap-5'>
      <div>
        <p>Quantity</p>
      </div>
      <div className=' flex flex-row gap-8 w-1/6'>
        <p className=' flex flex-row gap-8 p'>
          <span className='minus'>
            <AiOutlineMinus className=' cursor-pointer' fill='black' onClick={handleDecressQty} />
          </span>
          <span className='text-sm md:text-base lg:text-lg'>{qty}</span>
          <span className='plus'>
            <AiOutlinePlus className=' cursor-pointer ' onClick={handleIncressQty} />
          </span>
        </p>
      </div>
    </div>
   );
}
 
export default Quantity;