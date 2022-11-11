import React from 'react'
import { AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai';
const Footer = () => {
  return ( <div className=' text-center text-teal-900 font-bold font-serif py-2 lg:mt-10 lg:mb-10'>
    <p>Solo Market All Rights reserved</p>
    <div className=' flex flex-row w-24  lg:w-24 mx-auto lg:text-2xl'>
      <AiFillFacebook className=''/>
      <AiFillTwitterCircle/>
    </div>
  </div> );
}
 
export default Footer;