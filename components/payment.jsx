import Link from 'next/link';
import React, { useState } from 'react'
import { motion } from "framer-motion"
import { useStateContext } from '../context/stateContext';
import Quantity from './common/quantity';

const Payment = ({ product }) => {
  const { qty, onAdd,setShowCart } = useStateContext()

  return (<div className='lg:mt-10'>

    <Quantity />
    <div className=' flex flex-row gap-5 lg:mt-10 mt-5'>
      <motion.button onClick={() => onAdd(product, qty)} className=' text-teal-700 rounded-md bg-gray-300 h-4 lg:h-10 px-5 lg:px-10 '
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 1 }} >add to cart</motion.button>
      <motion.button className=' bg-teal-700 rounded-md lg:h-10  text-gray-50 h-4 px-5 lg:px-10'
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 1 }}><button onClick={()=>setShowCart(true)}>Buy now</button></motion.button>
    </div>
  </div>
  );
}

export default Payment;