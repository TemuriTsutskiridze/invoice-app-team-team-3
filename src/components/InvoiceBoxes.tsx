import React from 'react';
import { motion } from 'framer-motion';
import data from '../data.json';

function formatDate(dateString: string | number | Date) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function InvoiceBoxes() {
  return (
    <>
      {data.map((invoice, index) => (
        <motion.div
          key={invoice.id}
          className='flex justify-between px-6 bg-[#FFF] mx-6 rounded-lg pt-[1.56rem] pb-[1.37rem] mb-4 hover:border border-transparent hover:border-gray-500 cursor-pointer shadow-sm'
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          transition={{ duration: 0.5, delay: index * 0.3 }}
        >
          <div className='flex flex-col justify-between'>
            <span className='text-[0.9375rem] font-bold'>
              <span className='text-[#7E88C3]'>#</span>{invoice.id}
            </span>
            <span className='-mb-[0.9rem] text-[#7E88C3] text-[0.9375rem]'>
              Due {formatDate(invoice.paymentDue)}
            </span>
            <span className='font-bold'>£ {invoice.total.toFixed(2)}</span>
          </div>

          <div className='flex justify-between items-end flex-col gap-[1.68rem]'>
            <span className='font-[0.8125rem] text-[#858BB2] text-[0.8125rem] leading-[0.9375rem] tracking-[-0.00625rem]'>
              {invoice.clientName}
            </span>
            <div className={`${invoice.status === "paid" ? 'bg-[#33D69F]' : invoice.status === "pending" ? 'bg-[#FF8F00]' : 'bg-[#373B53]'} bg-opacity-10 flex justify-center items-center gap-2 min-w-[6.5rem] max-w-[7.5rem] rounded-[0.375rem] pt-[0.88rem] pb-[0.69rem]`}>
              <div className={`${invoice.status === "paid" ? "bg-[green]" : invoice.status === "pending" ? 'bg-[#FF8F00]' : 'bg-[black]'} w-[0.5rem] h-[0.5rem] rounded-lg`}></div>
              <span className={`${invoice.status === "paid" ? "text-[#33D69F]" : invoice.status === "pending" ? "text-[#FF8F00]" : "text-[#373B53]"} font-bold`}>
                {invoice.status}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
}

export default InvoiceBoxes;
