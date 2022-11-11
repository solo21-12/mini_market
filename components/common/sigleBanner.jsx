import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"



const Sigle = (props) => {
  const { Background, option, title } = props

  const mystyle = {
    backgroundImage:`url(${Background})`,
    fontFamily: "Arial"
  };
  return (

<>

<div className='sigle cursor-pointer  text-teal-500 bg-stone-100 shadow-xl shadow-gray-400 rounded-md mt-2 sm:mt-4 md:mt-6 lg:mt-10'
      >
      <h1 className=' text-center font-serif  font-bold mt-2 '>{title}</h1>
      <Link href={option}>
      <div className='sigle2 mx-auto'  style={mystyle}>
      </div>
      </Link>
      
    </div>
</>
    );
}

export default Sigle;