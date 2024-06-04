import { useContext, useState } from "react";
import {
  ClientAdress,
  InvoiceDates,
  ItemList,
  // ModalFooter,
  SenderAdress,
  yupSchema,
} from "../components";
import ArrowLeft from "/assets/icon-arrow-left.svg";
import { AppContext } from "../App";
import "../styles/ModalStyle.css";
import "../styles/index.css";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ModalFooter from "../components/modalComponents/ModalFooter";

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
    defaultValues: {
      items: [],
    },
  });

  const [clickSubmit, setClickSubmit] = useState<number>(0);
  console.log(modal);

  return (
    <div
      className={`md:bg-[rgba(0,0,0,0.5)] absolute w-full xl:left-[100px] xl:top-0 z-10 top-[72px] ${
        darkMode ? "bg-[#141625]" : "bg-white"
      } ${modal ? "block" : "hidden"}`}
    >
      <div
        className={`${
          darkMode ? "bg-[#141625]" : "bg-white"
        }  h-[100vh] md:min-h-[100%] relative overflow-scroll md:rounded-e-lg md:rounded-r-lg md:px-[56px] px-6 pt-8 pb-[180px]  md:w-[636px] `}
      >
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
              <ItemList
                clickSubmit={clickSubmit}
                setClickSubmit={setClickSubmit}
              />
            </div>
          </form>
          <ModalFooter setClickSubmit={setClickSubmit} />
        </FormProvider>
      </div>
    </div>
  );
};

export default Modal;
