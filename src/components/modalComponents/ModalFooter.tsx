import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { useFormContext } from "react-hook-form";

const ModalFooter = () => {
  const { darkMode, setModal } = useContext(AppContext);
  const { reset, clearErrors, handleSubmit } = useFormContext();
  const [info, setInfo] = useState<object>();

  const handleDiscard = () => {
    reset();
    clearErrors();
    setModal(false);
  };

  const submit = async (data: any) => {
    console.log("Form Submitted", data); 
  };

  return (
    <footer
      className={`${
        darkMode ? "bg-[#1e2139]" : ""
      } px-6 flex justify-center w-full bottom-0 left-0 py-[22px] gap-[7px] shadow-footerShadow mt-[88px] fixed`}
    >
      <button
        type="button"
        className={`text-[15px] font-bold h-12 rounded-[24px] px-[18px] flex items-center justify-center ${
          darkMode
            ? "bg-[#252945] text-[#dfe3fa]"
            : "bg-[#f9fafe] text-[#7e88c3]"
        }`}
        onClick={handleDiscard}
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
        onClick={handleSubmit(submit)}
        type="button"
        className="text-[#fff] text-[15px] font-bold h-12 bg-[#7c5dfa] rounded-[24px] px-[15px] flex items-center justify-center"
      >
        Save & Send
      </button>
    </footer>
  );
};

export default ModalFooter;
