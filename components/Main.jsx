/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useAnimation, useInView } from 'framer-motion'
import Link from 'next/link'
const Main = ({ banner }) => {
  const myStyle = {
    backgroundImage: `url(${banner.Background})`
  }
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

  return (

    <motion.div className=' min-h-full w-11/12 pb-6 sm:pb-8 md:pb-12 lg:pb-24 mx-auto mb-10 mt-5 rounded-md main flex flex-col justify-between'
      ref={ref}
      initial={{ opacity: 0 }}
      animate={animation}
      style={myStyle}
    >
      <div className='  mt-0 lg:pt-8 lg:ml-24 ml-5 '>
        <motion.p className=' icons1 text-teal-500 font-mono mb-1'></motion.p>
        <motion.h2 className='  dark:text-teal-500 icons2 font-bold font-serif'
          initial={{}}
          animate={{}}
        >{banner.smallText}</motion.h2>
        <h3 className='  py-0 text-slate-400 font-bold leading-3 icons2'>{banner.bigText}</h3>
        <p className='  icons text-slate-400 lg:mt-10 mt-2 w-1/3'>{banner.body}</p>


        <motion.button className=' w-25 md:w-30 lg:w-48 h-4 sm:h-5 md:h-6 lg:h-8 mx-0 bg-teal-800  rounded-lg  text-white px-3 mt-1 md:mt-10 lg:mt-20 sm:mt-10 icons'
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href={`/products/${banner.link}`}>{banner.btnText}</Link></motion.button>

      </div>



    </motion.div>

  );
}

export default Main;
