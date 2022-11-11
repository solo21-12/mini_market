import React from 'react'
import Image from 'next/image';
import { motion } from "framer-motion"
import logo from "../public/logo.png"
import { BiSearch } from "react-icons/bi"
import { GoLocation } from 'react-icons/go'
import { BsFillCartFill } from "react-icons/bs"
import {useStateContext} from "../context/stateContext.js"
import Link from 'next/link';
import Cart from './cart';
const NavBar = () => {
  const { totalQuanitity,setShowCart,showCart} = useStateContext()
  return (
    <div className='size bg-black flex flex-row justify-between  items-center text-stone-200 lg:py-2 font-serif'>

      <motion.div className=' logo md:ml-5' initial={{
        opacity: 0
      }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2
        }}>
      </motion.div>
      <div className='flex flex-row  lg:mr-10'>
        <motion.div initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.2 }}>
            <button onClick={()=>setShowCart(true)}>
            <BsFillCartFill className=' cursor-pointer text-xs lg:text-2xl text-yellow-400' />
            </button>

        </motion.div>
        <div className=''>
        <h1>{totalQuanitity}</h1>

        </div>
      </div>
     {showCart && <Cart className=" "/>} 


    </div>);
}

export default NavBar;