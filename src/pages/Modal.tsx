import { useContext, useEffect, useState } from "react";
import {
  ClientAdress,
  InvoiceDates,
  ItemList,
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
import axios from "axios";
import { useLocation } from "react-router-dom";

const Modal = () => {
  const { darkMode, modal, setModal, invoiceId } = useContext(AppContext);
  const [data, setData] = useState(null);
  const location = useLocation();

  const defaultValues = {
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    items: [],
    clientEmail: "",
    clientName: "",
    description: "",
    paymentTerms: "",
    createdAt: "",
  };

  const methods = useForm({
    resolver: yupResolver(yupSchema),
    defaultValues: data ? data : defaultValues,
  });


  useEffect(() => {
    if (location.pathname.includes("view-invoice")) {
      fetchData();
    } else {
      setData(null);
      methods.reset(defaultValues);
    }
  }, [location.pathname, invoiceId]);

  useEffect(() => {
    if (data) {
      methods.reset(data);
    }
  }, [data]);

  const fetchData = async () => {
    if (invoiceId !== "") {
      try {
        const result = await axios.get(
          `https://invoice-project-team-3.onrender.com/api/invoice/${invoiceId}`
        );
        setData(result.data);
        console.log(result.data);
      } catch (error) {
        console.error("Error fetching invoice data:", error);
      }
    }
  };

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
              <ItemList />
            </div>
          </form>
          <ModalFooter />
        </FormProvider>
      </div>
    </div>
  );
};

export default Modal;
