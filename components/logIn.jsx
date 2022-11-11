import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link';
import Input from './common/input';

const LogIn = () => {
  return (
  <motion.div className=' w-96 mx-auto mt-44'
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:3}}>
    <div className='logo1 rounded-md mx-auto bg-black mb-5'>
  
  </div>
  <h1 className=' text-center font-serif font-bold text-xl mb-2'>Sign In</h1>

    <form action='/' method='post'>
      <Input
      ids="username"
      type="text"
      label="Username"/>
       <Input
      ids="password"
      type="password"
      label="Password"/>
      <motion.button type='submit' className=' w-full bg-yellow-500 text-black mt-5 rounded-md h-8'
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 1 }}><Link href="/">
          Sign In</Link></motion.button>
    </form>
    <div className=' flex flex-row gap-2 mt-5'>
      <p>New To our website</p>
      <motion.button className=' bg-yellow-400 w-24 rounded-md'
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 1 }}><Link href={"/signUp"}>
          Sign Up</Link></motion.button>
    </div>

  </motion.div>);
}

export default LogIn;