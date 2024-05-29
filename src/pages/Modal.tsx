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
import "../styles/index.css";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


const Modal = () => {
  // useEffect(()=>{
  //   const fetchData = () =>{
  //     const data =
  //   }
  // })

  // const { id } = useParams();

  const { darkMode, modal, setModal } = useContext(AppContext);
  const methods = useForm({
    resolver: yupResolver(yupSchema),
  });

  return (
    <div
      className={` absolute w-full z-10 top-[72px] ${
        darkMode ? "bg-darkBgColor" : "bg-white "
      } ${modal ? "block" : "hidden"}`}
    >
      <div className={` px-6 pt-8 pb-[180px]   `}>
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
        <FormProvider {...methods}>
          <form className="mt-[22px]">
            <div>
              <SenderAdress />
              <ClientAdress />
              <InvoiceDates />
              <ItemList />
            </div>
            <ModalFooter />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Modal;
