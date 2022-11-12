import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useRouter } from "next/router";
import { Payment, Recommend } from '../../../../components';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useStateContext } from "../../../../context/stateContext"
const Detail = () => {
  const router = useRouter()
  const id = router.query.id
  const item = router.query.item
  const { showCart} = useStateContext()
  const [data, setData] = useState([])
  const [logo, setlogo] = useState(data.Background)
  const [recommend,setRecommend] = useState([])


  const getData = async () => {
    const datas = await (await fetch(`/api/products/${item}/${id}`)).json()
    setData(datas[0])
  }
  const getRecommend = async () => {
    const datas = await (await fetch(`/api/products/${item}`)).json()
    setRecommend(datas.slice(0,5))
  }
 
  useEffect(() => {
   
    getRecommend()
    getData()

  }, [])
  const handleClick = (id) => {
    setlogo(id)
  }
  // console.log(logo && logo);
  return (
    <div>
      <div className='pt-8 lg:pt-20 flex flex-col lg:gap-5 ml-10 min-h-full'>
        <div className=' flex flex-col md:flex-row gap-5'>
          <div className=' flex flex-col'>
            <div className="row-poster ">
              <Image src={data.Background} width={250} height={200} alt="" className='row-poster-img2 rounded-lg' />
            </div>
            <div className='row-poster'>
              {data.Background && <Image src={data.desc[0]} width={150} height={150} alt="" className='row-poster-img1' onClick={() => handleClick(data.desc[0])} />}
              {data.Background && <Image src={data.desc[1]} width={150} height={150} alt="" className='row-poster-img1' onClick={() => handleClick(data.desc[1])} />}
              {data.Background && <Image src={data.desc[2]} width={150} height={150} alt="" className='row-poster-img1' onClick={() => handleClick(data.desc[2])} />}
              
            </div>
          </div>
          <div className=' icons  text-teal-900 font-serif  w-1/2 '>
            <h1 className=' text-xs md:text-2xl font-serif text-teal-800'>{data.title}</h1>
            <div className=' flex flex-row'>
              <AiFillStar fill='red' />
              <AiFillStar fill='red' />
              <AiFillStar fill='red' />
              <AiFillStar fill='red' />
              <AiOutlineStar />
            </div>
            <h1 > Details:</h1>
            <p className=' '>{data.body}</p>
            <h1 className=' text-xs md:text-2xl font-serif text-teal-800 font-bold lg:mt-10'>${data.price}</h1>
            <Payment 
            product={data}
             />
          </div>
        </div>
      </div>
      
      {showCart ?<div></div>: 
      <Recommend data={recommend} link={`/products/${item}`} />
      }
    </div>);
}

export default Detail;
