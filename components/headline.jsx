import React from 'react'
const Headline = ({headline}) => {
  return (  <div className=' text-center mb-2'>
    <h1 className='icons2 text-teal-800 font-serif font-bold'>{headline.bigText}</h1>
    <p className='icons font-serif text-gray-400'>{headline.smallText}</p>
  </div>);
}
 
export default Headline;