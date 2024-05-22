import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import data from "../data.json";
import { MyContext } from "../pages/Invoice";
import ArrowRight from "../../public/assets/icon-arrow-right.svg";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
function formatDate(dateString: string | number | Date) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function InvoiceBoxes() {
  const { filterClick, isMobile } = useContext(MyContext);
  const { appData } = useContext(AppContext);
  const filterInvoice = () => {
    switch (filterClick) {
      case "pending":
        return appData.filter((item) => item.status === "pending");
      case "paid":
        return appData.filter((item) => item.status === "paid");
      case "draft":
        return appData.filter((item) => item.status === "draft");
      case "all":
        return appData;
      default:
        return appData;
    }
  };

  return (
    <div className="flex justify-center mb-[6.56rem]">
      <div className="w-full max-w-[60rem]">
        {filterInvoice().map((invoice, index) => (
          <Link to={`/view-invoice/${invoice.id}`} key={index}>
            <motion.div
              key={invoice.id}
              className="flex justify-between px-6 bg-[#FFF] mx-6 rounded-lg pt-[1.56rem] pb-[1.37rem] mb-4 hover:border border-transparent hover:border-[#7C5DFA] cursor-pointer shadow-sm
              md:mx-[3rem] md:items-center"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <div className="flex flex-col justify-between md:flex-row md:justify-center">
                <span className="text-[0.9375rem] font-bold md:mr-[2.75rem]">
                  <span className="text-[#7E88C3]">#</span>
                  {invoice.id}
                </span>
                <span className="-mb-[0.9rem] text-[#7E88C3] text-[0.9375rem] md:mr-[3.19rem] md:items-center">
                  Due {formatDate(invoice.paymentDue)}
                </span>
                {!isMobile ? (
                  <span className="font-bold mt-4 md:mr-[3.56rem]">
                    £ {invoice.total.toFixed(2)}
                  </span>
                ) : (
                  <span className="font-[0.8125rem] text-[#858BB2] text-[0.8125rem] tracking-[-0.00625rem]">
                    {invoice.clientName}
                  </span>
                )}
              </div>

              <div className="flex justify-between items-end flex-col gap-[1.68rem] md:items-center md:justify-center md:flex-row">
                {!isMobile ? (
                  <span className="font-[0.8125rem] text-[#858BB2] text-[0.8125rem] tracking-[-0.00625rem]">
                    {invoice.clientName}
                  </span>
                ) : (
                  <span className="font-bold">
                    £ {invoice.total.toFixed(2)}
                  </span>
                )}
                <div
                  className={`${
                    invoice.status === "paid"
                      ? "bg-[#33D69F]"
                      : invoice.status === "pending"
                      ? "bg-[#FF8F00]"
                      : "bg-[#373B53]"
                  } bg-opacity-10 flex justify-center items-center gap-2 min-w-[6.5rem] max-w-[7.5rem] rounded-[0.375rem] pt-[0.88rem] pb-[0.69rem]`}
                >
                  <div
                    className={`${
                      invoice.status === "paid"
                        ? "bg-[#33D69F]"
                        : invoice.status === "pending"
                        ? "bg-[#FF8F00]"
                        : "bg-[black]"
                    } w-[0.5rem] h-[0.5rem] rounded-lg`}
                  ></div>
                  <span
                    className={`${
                      invoice.status === "paid"
                        ? "text-[#33D69F]"
                        : invoice.status === "pending"
                        ? "text-[#FF8F00]"
                        : "text-[#373B53]"
                    } font-bold`}
                  >
                    {invoice.status.split("")[0].toUpperCase() +
                      invoice.status.slice(1)}
                  </span>
                </div>
                {isMobile && <img src={ArrowRight} alt="" />}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default InvoiceBoxes;
