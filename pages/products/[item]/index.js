/* eslint-disable react/no-unescaped-entities */
import { Headline, Product } from "../../../components"
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
const Item = ({ item }) => {
  const [data, setData] = useState([])
  const router = useRouter()
  const id = router.query.item
  const dataGetter = async () => {
    setData(await (await fetch(`/api/products/${id}`)).json())
  }
  useEffect(() => {
    dataGetter()
  }, [])
  const name = item
  const headline = {
    "bigText": "Descover our best selling",
    "smallText": item
  }

  console.log(data);
  return (<div className=''>

    <motion.div className=' '
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      animate={{ opacity: 1 }}>
      <Headline headline={headline} />
      <div className=' flex flex-row gap-2  w-11/12 mx-auto lg:ml-32 lg:pt-20 flex-wrap'>
        {data.length >= 1 ? data.map(laptop => {
          return (
            <Product
              Background={laptop.Background}
              price={laptop.price}
              title={laptop.title}
              key={laptop.id}
              id={`/${item}/${laptop.id}`} />
          )
        }) : <div className=' min-h-screen text-center text-teal-700'>
          <h1 className=" text-center"
          
          >loading<motion.span initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:5}}>...</motion.span></h1></div>}
      </div>

    </motion.div>
  </div>);
}

export default Item;
export async function getServerSideProps(context) {
  const { params } = context
  const item = params.item
  return {
    props: {
      item
    }
  }
}