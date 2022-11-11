import React from 'react'
import Image from 'next/image';
import { motion } from "framer-motion"
import Headline from './headline';

const Recommend = ({ data }) => {
  const headline = {
    "bigText": "You may also like",
    "smallText": ""
  }
  return (<div>
    <Headline headline={headline} />
    <div className='row-poster track'>
      {data.map(rec => {
        return (
          <Image src={rec.Background} key={rec.id} alt="logo" className='row-poster-img' width={500} height={400} />
        )
      })}
    </div>
  </div>);
}

export default Recommend;