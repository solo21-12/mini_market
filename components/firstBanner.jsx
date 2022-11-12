import React from 'react'
import { motion } from "framer-motion"



import Sigle from './common/sigleBanner';

const Banner = ({ category }) => {

  return (
    <div>
      { category && category.length >= 1 ? <motion.div className='min-h-full max-w-full lg:pb-20  '
        initial={{
          opacity: 0
        }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0 }}>
      <div className='  w-11/12 mx-auto'>
        <div className='flex flex-row lg:ml-40 gap-5 mx-auto flex-wrap'>
          {category.map(category => {
            return (
              <Sigle
                key={category.id}
                title={category.name}
                option={`/products/${category.link}`}
                Background={category.Background}
              />
            )
          })}
        </div>
      </div>
    </motion.div> : <div className=' text-center text-teal-700'>loading</div>
    }
      </div>
     
  );
}

export default Banner;