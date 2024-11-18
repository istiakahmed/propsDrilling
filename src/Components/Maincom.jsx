import React, { useState } from 'react'
import Commonbtn from './Commonbtn'

const Maincom = () => {
    const [count, setCount] = useState(0)

    const handleAdd = () =>{
        setCount(count+5)
    }
    const handleRemove = () =>{
        setCount(count-5)
    }


  return (
    <>
    <div className='flex flex-col justify-center items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[70px] bg-transparent border-[2px] border-orange-400'>
        <div className='text-5xl font-roboto font-medium text-[#FF8000]'>{count}</div>


    <div className='flex gap-5'>
        <Commonbtn numChange={handleAdd} value={"Add"} back={'bg-[#8B5DFF]'} hoverEffect={'hover:bg-[#B59F78]'} />
        <Commonbtn numChange={handleRemove} value={"Remove"} back={'bg-[#8B5DFF]'} hoverEffect={'hover:bg-[#B59F78]'}  />

     </div>
    </div>

     
    </>
  )
}

export default Maincom
