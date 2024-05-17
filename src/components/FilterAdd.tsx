import React, { useState } from 'react';
import IconDown from "../../public/assets/icon-arrow-down.svg";
import Plus from "../../public/assets/icon-plus.svg";
import data from '../data.json';
import '../styles/filter.css';

function FilterAdd() {
  const [filter, setFilter] = useState(false);
  const [arrowUp, setArrowUp] = useState(false);

  const filterBox = () => {
    setFilter(!filter);
    setArrowUp(!arrowUp);
  };

  return (
    <div className='flex justify-between items-center px-[1.5rem] mt-9 mb-8'>
      <div className='inline-flex justify-start items-start flex-col'>
        <h1 className='text-[1.5rem] font-bold -mb-[4px]'>Invoices</h1>
        <p className='text-[#888EB0]'>{data.length} invoices</p>
      </div>
      <div className='flex justify-between items-center gap-[1.16rem]'>
        <div className='flex justify-between items-center gap-[0.75rem]'>
          <span className='font-bold text-[0.9375rem]'>Filter</span>
          {!arrowUp ? 
            <img src={IconDown} alt="" className='w-[10.456px] h-[7.228px] cursor-pointer' onClick={filterBox}/> :
            <img src={IconDown} alt="" className='w-[10.456px] h-[7.228px] rotate-180 cursor-pointer' onClick={filterBox}/>
          }
          <div 
            className={`filter-box ${filter ? 'filter-box-visible' : 'filter-box-hidden'}`}
          >
            <div className='flex gap-[0.81rem]'>
              <input type="checkbox" className="accent-[#7C5DFA] cursor-pointer"/>
              <span className='text-black text-[0.9375rem] font-bold'>Draft</span>
            </div>
            <div className='flex gap-[0.81rem]'>
              <input type="checkbox" className="accent-[#7C5DFA] cursor-pointer"/>
              <span className='text-black text-[0.9375rem] font-bold'>Pending</span>
            </div>
            <div className='flex gap-[0.81rem]'>
              <input type="checkbox" className="accent-[#7C5DFA] cursor-pointer"/>
              <span className='text-black text-[0.9375rem] font-bold'>Paid</span>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center w-[5.625rem] h-[2.75rem] bg-[#7C5DFA] rounded-[1.5rem] gap-[0.5rem] cursor-pointer'>
          <img src={Plus} alt="" className='bg-white w-8 h-8 rounded-[50%] flex justify-center items-center p-[10px]'/>
          <span className='text-white text-[0.9375rem]'>New</span>
        </div>
      </div>
    </div>
  );
}

export default FilterAdd;
