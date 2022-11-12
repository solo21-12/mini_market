import React, { useEffect, useRef } from 'react'
import { useAnimation, useInView, motion } from 'framer-motion'

import Image from 'next/image'
import Link from 'next/link'
const Banner1 = ({banner}) => {

  const ref = useRef(null)
  const InView = useInView(ref)
  const animation = useAnimation()
  useEffect(() => {
    if (InView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 1.5,
          delay: 0,
          type: "tween"
        }
      })
    }
    if (!InView) {
      animation.start({
        opacity: 0,
        transition: {
          duration: 1.5,
          delay: 0,
          type: "tween"
        }
      })
    }

  }, [InView])
  return (<motion.div className=' footer bg-teal-800 min-h-full w-11/12 pb-6 sm:pb-8 md:pb-12 lg:pb-24 mx-auto mb-10 mt-40 rounded-md'
    ref={ref}
    initial={{ opacity: 0 }}
    animate={animation}>
      {
        banner && <div className=' flex flex-row lg:mt-40 gap-5 '>
        <div className='  w-1/3 text-center  text-white lg:mt-24 mt-8 sm:mt-10 md:mt-14'>
          <p className=' text-gray-300 banner-smaller-text'>20% off</p>
          <h1 className=' banner-text font-bold font-mono'>Fine</h1>
          <h1 className=' banner-text font-bold font-sans'>Smille</h1>
          <p className=' text-gray-300 banner-smaller-text'>oct 20 to nov 12</p>
        </div>
        <motion.div className=' w-1/3 sigle20 head' style={{backgroundImage:`url("/a5.webp")`}}>
        </motion.div>
        <div className=' w-1/3 mx-auto text-white lg:mt-24 mt-8 sm:mt-10 md:mt-14'>
          <p className=' text-gray-300 banner-smaller-text'>Solo-bits</p>
          <h1 className=' banner-text font-bold font-mono'>Summer Sale</h1>
          <p className=' text-gray-300 banner-smaller-text'>Description</p>
          <button className=' bg-white text-black rounded-md h-2 sm:h-4 md:h-6 px-1 icons lg:h-8 lg:px-2 lg:mt-5'><Link href="/products/headphones"> Shop now</Link></button>
        </div>
      </div>
      }
    
  </motion.div>);
}

export default Banner1;