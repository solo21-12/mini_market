import React from 'react'
import Image from 'next/image';
import Headline from './headline';
import Link from "next/link"
const Recommend = ({ data,link }) => {
  const headline = {
    "bigText": "You may also like",
    "smallText": ""
  }
  return (<div>
    <Headline headline={headline} />
    <div className='row-poster track'>
      {data.map(rec => {
        return (
          <Link key={rec.id}  href={`${link}`}>
          <Image src={rec.Background}  alt="logo" className='row-poster-img' width={500} height={400} />
          </Link>
        )
      })}
    </div>
  </div>);
}

export default Recommend;