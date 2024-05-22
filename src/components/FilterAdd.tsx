import React, { useContext, useState } from "react";
import IconDown from "../../public/assets/icon-arrow-down.svg";
import Plus from "../../public/assets/icon-plus.svg";
import data from "../data.json";
import { MyContext } from "../pages/Invoice";
import "../styles/filter.css";
import { AppContext } from "../App";
export function FilterAdd() {
  const [filter, setFilter] = useState<boolean>(false);
  const [arrowUp, setArrowUp] = useState<boolean>(false);
  const { filterClick, setFilterClick, modalPage, setModalPage } =
    useContext(MyContext);
  const { appData, modal, setModal } = useContext(AppContext);

  const filterBox = () => {
    setFilter(!filter);
    setArrowUp(!arrowUp);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setFilterClick(value as any);
      setFilter(!filter);
    }
  };

  const filterInvoice = () => {
    switch (filterClick) {
      case "pending":
        return appData.filter((item) => item.status.name === "pending");
      case "paid":
        return appData.filter((item) => item.status.name === "paid");
      case "draft":
        return appData.filter((item) => item.status.name === "draft");
      case "all":
        return appData;
      default:
        return appData;
    }
  };

  return (
    <div className="flex justify-center  xl:mt-[3.88rem]">
      <div className="flex justify-between items-center px-[1.5rem] mt-9 mb-8 w-full max-w-[60rem] md:px-[3rem]">
        <div className="inline-flex justify-start items-start flex-col">
          <h1 className="text-[1.5rem] font-bold -mb-[4px] md:text-[2.25rem]">
            Invoices
          </h1>
          <p className="text-[#888EB0]">{filterInvoice().length} invoices</p>
        </div>
        <div className="flex justify-between items-center gap-[1.16rem]">
          <div className="relative">
            <div
              className="flex justify-between items-center gap-[0.75rem] md:mr-[2.75rem] cursor-pointer"
              onClick={filterBox}
            >
              <span className="font-bold text-[0.9375rem]">
                Filter{" "}
                <span className=" hidden md:inline-block">by status</span>
              </span>
              <img
                src={IconDown}
                alt=""
                className={`w-[10.456px] h-[7.228px] transition-transform duration-300 ${
                  arrowUp ? "rotate-180" : ""
                }`}
              />
            </div>

            <div
              className={`filter-box ${
                filter ? "filter-box-visible" : "filter-box-hidden"
              } absolute top-full mt-5 -mr-[6rem] md:-mr-[1rem] bg-white p-4 shadow-lg rounded-lg z-10`}
            >
              <div className="flex gap-[0.81rem]">
                <input
                  type="checkbox"
                  value="draft"
                  className="accent-[#7C5DFA] cursor-pointer"
                  onChange={handleCheckboxChange}
                  checked={filterClick === "draft"}
                />
                <span className="text-black text-[0.9375rem] font-bold">
                  Draft
                </span>
              </div>
              <div className="flex gap-[0.81rem]">
                <input
                  type="checkbox"
                  value="pending"
                  className="accent-[#7C5DFA] cursor-pointer"
                  onChange={handleCheckboxChange}
                  checked={filterClick === "pending"}
                />
                <span className="text-black text-[0.9375rem] font-bold">
                  Pending
                </span>
              </div>
              <div className="flex gap-[0.81rem]">
                <input
                  type="checkbox"
                  value="paid"
                  className="accent-[#7C5DFA] cursor-pointer"
                  onChange={handleCheckboxChange}
                  checked={filterClick === "paid"}
                />
                <span className="text-black text-[0.9375rem] font-bold">
                  Paid
                </span>
              </div>
              <div className="flex gap-[0.81rem]">
                <input
                  type="checkbox"
                  value="all"
                  className="accent-[#7C5DFA] cursor-pointer"
                  onChange={handleCheckboxChange}
                  checked={filterClick === "all"}
                />
                <span className="text-black text-[0.9375rem] font-bold">
                  All
                </span>
              </div>
            </div>
          </div>
          <div
            onClick={() => setModalPage(!modalPage)}
            className="flex justify-center items-center w-[5.625rem] h-[2.75rem] bg-[#7C5DFA] rounded-[1.5rem] gap-[0.5rem] cursor-pointer
            md:w-[9.375rem]"
          >
            <img
              src={Plus}
              alt=""
              className="bg-white w-8 h-8 rounded-[50%] flex justify-center items-center p-[10px]"
            />
            <div
              onClick={() => setModal(true)}
              className="text-center text-white text-[0.9375rem] font-bold"
            >
              New <span className="hidden md:inline">Invoice</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterAdd;
