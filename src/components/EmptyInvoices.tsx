import React from 'react'
import EmptyImage from "../../public/assets/illustration-empty.svg"

function EmptyInvoices() {
  return (
    <div className=' flex items-center justify-center flex-col mt-[6.37rem]'>
      <img src={EmptyImage} alt="" />
      <div className=' gap-[1.44rem] flex flex-col justify-center items-center mt-[2.62rem]'>
        <span className=' font-bold text-[1.5rem] tracking-[-0.04688rem]'>There is nothing here</span>
      <span className=' text-center max-w-[12.875rem] text-[0.8125rem] text-[#888EB0] text-medium leading-[0.9375rem]'>Create an invoice by clicking the 
        <span className=' text-bold text-[0.8125rem] leading-[0.9375rem]'> New</span> button and get started</span>
      </div>
    </div>
  )
}

export default EmptyInvoices