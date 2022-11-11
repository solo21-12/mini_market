import React from 'react'
const Input = (props) => {
  const { ids, type, label, info,placeHolder,value,setValue } = props
  const handleChange=(e)=>{
    console.log( e);
  }

  return (
    <div className=' flex flex-col gap-2'>
      <label htmlFor={ids} className="font-serif font-bold">{label}</label>
      <input 
      value={value} 
      onChange={()=>handleChange()} 
      type={type} 
      name="username" 
      id='username' 
      className=' w-auto h-10 rounded-md bg-stone-200' placeholder={placeHolder} />
      {info && <p className=' text-xs'>Passwords must be at least 6 characters.</p>}
    </div>);
}

export default Input;