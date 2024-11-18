import React from 'react'

const Commonbtn = ({value, hoverEffect, back, numChange}) => {
  return (
     <>
      <div>
        <button onClick={numChange} className={`font-roboto font-medium text-[22px] px-[9px] py-[5px] text-[#FFF7D1] rounded-[10px] ${hoverEffect} ${back}`}>{value}</button>
      </div>
     </>
  )
}

export default Commonbtn
