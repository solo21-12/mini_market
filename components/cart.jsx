import React, { useRef } from 'react'
import Link from 'next/link';
import { useStateContext } from '../context/stateContext';
import {GiPaperBagOpen} from "react-icons/gi"
import { AiFillLeftCircle } from "react-icons/ai"
import Item from './common/item';
const Cart = () => {
  const { totalQuanitity, totalPrice, cartItem, setShowCart ,toggleCartItemQuanitity} = useStateContext();
  const cartRef = useRef()
  return (
    <div className='cart-wrapper w-full md:w-1/2 lg:w-2/5 text-black ' ref={cartRef}>
      <div className=' flex flex-row justify-between mr-2  md:mr-5 text-sm my-5'>
        <button onClick={() => setShowCart(false)}>
          <AiFillLeftCircle className=' text-teal-600 text-2xl' />
        </button>
        <p>Your Cart <span className='text-red-600'> ({totalQuanitity} items) </span></p>
      </div>

      <div className='row-poster1  bg-white '>
        {cartItem.length >= 1 ? cartItem.map((item) => {
          return (
            <Item
              key={item._id}
              Name={item.title}
              price={item.price}
              background={item.Background}
              id={item._id}
              quantity={item.quantity}
              product={item}
            />
          )
        }) : <div> 
          <GiPaperBagOpen className=' w-72 mx-auto text-xl sm:text-2xl md:text-4xl lg:text-7xl text-red-700'/> 
          <h3 className=' text-center  text-base'>Your shopping bag is empty</h3>
          <Link href="/">
            <button  className=' bg-red-600 hover:bg-red-700 lg:px-10 w-full my-5 lg:w-2/3 rounded-md py-1 lg:ml-20 text-white lg:mb-20' onClick={()=>setShowCart(false)}>continoue shopping</button>
          </Link>
          </div>}

          {
            cartItem.length >= 1 && <div>
            <p className=' w-11/12 flex flex-row justify-between text-base'>Subtotal <span className=' text-blue-900'> ${totalPrice} </span></p>
            <button className=' bg-red-600 hover:bg-red-700 lg:px-10 w-full my-5 lg:w-2/3 rounded-md py-1 lg:ml-20 text-white lg:mb-20'>Pay with stripe</button>
          </div>
          }
        
      </div>


    </div>);
}

export default Cart;
