import React from 'react'
import IconDown from "../../public/assets/icon-arrow-down.svg"
import Plus from "../../public/assets/icon-plus.svg"

function FilterAdd() {
  return (
    <div className=' flex justify-between items-center px-[1.5rem] mt-[2.25rem]'>
      <div className='inline-flex justify-start items-start flex-col'>
        <h1 className=' text-[1.5rem] font-bold -mb-[4px]'>Invoices</h1>
        <p className=' text-[#888EB0]'>7 invoices</p>
      </div>
    <div className=' flex justify-between items-center gap-[1.16rem]'>
    <div className=' flex justify-between items-center gap-[0.75rem]'>
      <span className=' font-bold text-[0.9375rem]'>Filter</span>
      <img src={IconDown} alt="" className=' w-[8.456px] h-[5.228px]'/>
    </div>
    
    <div className='flex justify-center items-center w-[5.625rem] h-[2.75rem] bg-[#7C5DFA] rounded-[1.5rem] gap-[0.5rem]'>
      <img src={Plus} alt="" className=' bg-white w-8 h-8 rounded-[50%] flex justify-center items-center p-[10px]'/>
      <span className=' text-white text-[0.9375rem]'>New</span>
    </div>
    </div>
      
    </div>
  )
}

export default FilterAdd