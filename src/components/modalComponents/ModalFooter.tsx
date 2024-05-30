import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import { useFormContext } from "react-hook-form";
import axios from "axios";

const ModalFooter: React.FC<{
  setClickSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setClickSubmit }) => {
  const { darkMode, setModal } = useContext(AppContext);
  const {
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const addInvoice =  (data: any) => {
    console.log(data);
    console.log("consoled data")
  };

  return (
    <footer
      className={`${
        darkMode ? "bg-[#1e2139]" : "bg-[#fff] shadow-footerShadow"
      } px-6 flex justify-center w-full bottom-0 left-0 py-[22px] gap-[7px]  mt-[88px] fixed`}
    >
      <button
        type="button"
        className={`text-[15px] font-bold h-12 rounded-[24px] px-[18px] flex items-center justify-center ${
          darkMode
            ? "bg-[#252945] text-[#dfe3fa]"
            : "bg-[#f9fafe] text-[#7e88c3]"
        }`}
      >
        Discard
      </button>
      <button
        className={`text-[15px] font-bold h-12 bg-[#373b53] rounded-[24px] px-[15px] flex items-center justify-center ${
          darkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"
        }`}
        type="button"
      >
        Save as Draft
      </button>
      <button
        type="button"
        onClick={async () => {
          await handleSubmit(addInvoice)();
          setClickSubmit(true); 
        }}
        className="text-[#fff] text-[15px] font-bold h-12 bg-[#7c5dfa] rounded-[24px] px-[15px] flex items-center justify-center"
      >
        Save & Send
      </button>
    </footer>
  );
};

export default ModalFooter;
