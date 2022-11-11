import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsFillHeartFill } from 'react-icons/bs'
import { MdLibraryAddCheck } from 'react-icons/md'
import { MdMore } from 'react-icons/md'


const Product = (props) => {
  const { Background, price, title, id } = props
  console.log(price);
  const mystyle = {
    backgroundImage: `url(${Background})`,
    fontFamily: "Arial"
  };
  return (
    <motion.div className='  w-1/5 ml-5 mt-10 cursor-pointer flex-col flex rounded-lg'
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 1 }}
    >
      <Link href={`/products${id}`}>
        <div className='sigle1 rounded-xl' style={mystyle}>
        </div>
      </Link>
      <div className=' flex flex-col price text-teal-700 font-serif ml-1'>
        <h1 className=''>{title}</h1>
        <p className=' font-bold '>$ {price}</p>

      </div>


    </motion.div>);
}

export default Product;