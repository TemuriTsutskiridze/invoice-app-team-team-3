import { useContext } from "react";
import { InputField, ItemList, ModalFooter } from "../components";
import ArrowLeft from "/assets/icon-arrow-left.svg";
import { AppContext } from "../App";
import "../styles/ModalStyle.css";

const Modal = () => {
  const { darkMode } = useContext(AppContext);

  return (
    <div className=" absolute w-full bg-white z-10">
      <div className={` px-6 pt-8 pb-[180px] top-[72px] `}>
        <div className="flex gap-6 items-center">
          <img src={ArrowLeft} alt="Arrow Left" />
          <p className="inputText">Go back</p>
        </div>
        <h1 className="text-[24px] font-bold tracking-[-0.5px] mt-6">
          New Invoice
        </h1>
        <form className="mt-[22px]">
          <div>
            <div>
              <p className="inputText text-blue">Bill From</p>
              <InputField type="text">Street Address</InputField>
              <div>
                <div className="flex gap-4">
                  <div className="halfSize">
                    <InputField type="text">City</InputField>
                  </div>
                  <div className="halfSize">
                    <InputField type="text">Post Code</InputField>
                  </div>
                </div>
                <InputField type="text">Country</InputField>
              </div>
            </div>
            <div className="mt-[41px]">
              <p className="inputText text-blue">Bill To</p>
              <InputField type="text">Client’s Name</InputField>
              <InputField type="email">Client’s Email</InputField>
              <InputField type="text">Street Address</InputField>
              <div>
                <div className="flex gap-4">
                  <div className="halfSize">
                    <InputField type="text">City</InputField>
                  </div>
                  <div className="halfSize">
                    <InputField type="text">Post Code</InputField>
                  </div>
                </div>
                <InputField type="text">Country</InputField>
              </div>
            </div>
            <div className="pt-[26px]">
              <label className="labelStyle mt-6">Invoice Date</label>
              <input type="date" className="inputStyle inputText" />
              <InputField type="text">Payment Terms</InputField>
              <InputField type="text">Project Description</InputField>
            </div>
            <ItemList />
          </div>
          <ModalFooter />
        </form>
      </div>
    </div>
  );
};

export default Modal;
