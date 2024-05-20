import { useContext } from "react";
import { AppContext } from "../../App";

const ModalFooter = () => {
  const { darkMode } = useContext(AppContext);
  return (
    <footer
      className={`${
        darkMode && "bg-[#1e2139]"
      } px-6 flex justify-center absolute w-full bottom-0 left-0 py-[22px]  gap-[7px]  shadow-footerShadow mt-[88px]`}
    >
      <button
        className={`  text-[15px] font-bold h-12 rounded-[24px] px-[18px] flex items-center justify-center ${
          darkMode
            ? "bg-[#252945] text-[#dfe3fa]"
            : " bg-[#f9fafe] text-[#7e88c3]"
        }`}
      >
        Discard
      </button>
      <button
        type="submit"
        className={` text-[15px] font-bold h-12 bg-[#373b53] rounded-[24px] px-[15px] flex items-center justify-center ${
          darkMode ? "text-[#dfe3fa]" : " text-[#7e88c3] "
        }`}
      >
        Save as Draft
      </button>
      <button
        type="submit"
        className=" text-[#fff] text-[15px] font-bold h-12 bg-[#7c5dfa] rounded-[24px] px-[15px] flex items-center justify-center"
      >
        Save & Send
      </button>
    </footer>
  );
};

export default ModalFooter;
