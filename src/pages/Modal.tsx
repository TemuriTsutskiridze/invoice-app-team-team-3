import { useContext } from "react";
import {
  ClientAdress,
  InvoiceDates,
  ItemList,
  ModalFooter,
  SenderAdress,
  yupSchema,
} from "../components";
import ArrowLeft from "/assets/icon-arrow-left.svg";
import { AppContext } from "../App";
import "../styles/ModalStyle.css";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Modal = () => {
  const { darkMode, modal, setModal } = useContext(AppContext);
  const methods = useForm({
    resolver: yupResolver(yupSchema),
  });

  const Submit = async (data: any) => {
    console.log(data);
  };

  return (
    <div
      className={` absolute w-full z-10 ${
        darkMode ? "bg-darkBgColor" : "bg-white "
      } ${modal ? "block" : "hidden"}`}
    >
      <div className={` px-6 pt-8 pb-[180px] top-[72px]  `}>
        <div
          onClick={() => {
            setModal(false);
          }}
          className="flex gap-6 items-center cursor-pointer"
        >
          <img src={ArrowLeft} alt="Arrow Left" />
          <p className={`inputText ${darkMode && "text-white"}`}>Go back</p>
        </div>
        <h1
          className={`text-[24px] font-bold tracking-[-0.5px] mt-6 ${
            darkMode && "text-white"
          }`}
        >
          New Invoice
        </h1>
        <form className="mt-[22px]" onSubmit={methods.handleSubmit(Submit)}>
          <FormProvider {...methods}>
            <div>
              <SenderAdress />
              <ClientAdress />
              <InvoiceDates />
              <ItemList />
            </div>
            <ModalFooter />
          </FormProvider>
        </form>
      </div>
    </div>
  );
};

export default Modal;
