import React from 'react'
import { AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai';
const Footer = () => {
  return ( <div className=' text-center text-white font-bold font-serif py-2  pt-10 lg:pb-10 bg-black'>
    <p>Solo Market All Rights reserved</p>
    <div className=' flex flex-row w-24  lg:w-24 mx-auto lg:text-2xl'>
      <AiFillFacebook className=''/>
      <AiFillTwitterCircle/>
    </div>
  </div> );
}
 
export default Footer;