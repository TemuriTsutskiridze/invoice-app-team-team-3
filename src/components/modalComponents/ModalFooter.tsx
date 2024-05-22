const ModalFooter = () => {
  return (
    <footer className="px-6 flex justify-center absolute w-full bottom-0 left-0 py-[22px]  gap-[7px]  shadow-footerShadow mt-[88px]">
      <button className=" text-[#7e88c3]  text-[15px] font-bold h-12 bg-[#f9fafe] rounded-[24px] px-[18px] flex items-center justify-center">
        Discard
      </button>
      <button className=" text-[#7e88c3]  text-[15px] font-bold h-12 bg-[#373b53] rounded-[24px] px-[15px] flex items-center justify-center">
        Save as Draft
      </button>
      <button className=" text-[#7e88c3] text-[15px] font-bold h-12 bg-[#7c5dfa] rounded-[24px] px-[15px] flex items-center justify-center">
        Save & Send
      </button>
    </footer>
  );
};

export default ModalFooter;
