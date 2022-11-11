import React, { useState } from 'react'
import { motion } from "framer-motion"
import Input from './common/input';
import Auth from './auth';
import Image from 'next/image';
import logo from "../public/logo.png"
import Link from 'next/link';


const Register = () => {
  const {name,setName} = useState("")
  const {email,setEmail} = useState("")
  const {password,setPassword} = useState("")

  return (
    <motion.div className=' w-96 mx-auto pt-32 min-h-screen py-10'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}>
      <div className='logo1 rounded-md mx-auto bg-black'>
  
      </div>
      <h1 className=' text-center font-serif font-bold text-xl mb-2'>Create an account</h1>
      <form action='/signup' method='post'>
        <Input
          ids="name"
          type="text"
          label="Your Name"
          placeHolder="First and last name"
          value={name}
          setValue={setName} />
        <Input
          ids="email"
          type="email"
          label="Email Address" />
        <Input
          ids="password"
          type="password"
          label="Password"
          placeHolder="At least six characters"
          info="true" />
        <Input
          ids="passwordConfirm"
          type="password"
          label="Re-enter Password" />
        <motion.button type='submit' className=' w-full bg-yellow-500 text-black mt-5 rounded-md h-8'
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1 }}>Sign Up</motion.button>
      </form>
      <Auth />

      <div className=' flex flex-row gap-2 mt-5 text-xs'>
      <p>Already have an account</p>
      <motion.button className=' bg-yellow-400 w-24 rounded-md'
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 1 }}><Link href={"/signin"}>
          Sign in</Link></motion.button>
    </div>
    </motion.div>);
}

export default Register;