import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { useFormContext } from "react-hook-form";
import axios from "axios";

const ModalFooter = () => {
  const { darkMode, setModal } = useContext(AppContext);
  const { reset, clearErrors, handleSubmit } = useFormContext();
  const [info, setInfo] = useState<object>();

  const handleDiscard = () => {
    reset();
    clearErrors();
    setModal(false);
  };

  function generateShortId(length: number = 6): string {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  }

  function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  const submit = async (data: any) => {
    const createdAt = new Date();
    const paymentDue = addDays(createdAt, data.paymentTerms);
    const invoiceData = {
      ...data,
      id: generateShortId(),
      createdAt: formatDate(createdAt),
      paymentDue: formatDate(paymentDue),
      status: {
        name: "Paid",
      },
    };

    try {
      const response = await axios.post(
        "https://invoice-project-team-3.onrender.com/api/invoice/",
        invoiceData
      );
      console.log("Invoice saved successfully:", response.data);
      setInfo(response.data);
    } catch (error) {
      console.error("Error saving invoice:", error);
    }
  };

  const saveDraft = async (data: any) => {
    const createdAt = new Date();
    const paymentDue = addDays(createdAt, data.paymentTerms);
    const invoiceData = {
      ...data,
      id: generateShortId(),
      createdAt: formatDate(createdAt),
      paymentDue: formatDate(paymentDue),
      status: {
        name: "Draft",
      },
    };

    try {
      const response = await axios.post(
        "https://invoice-project-team-3.onrender.com/api/invoice/draft/",
        invoiceData
      );
      console.log("Draft saved successfully:", response.data);
      setInfo(response.data);
    } catch (error) {
      console.error("Error saving draft:", error);
    }
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
        onClick={handleDiscard}
      >
        Discard
      </button>
      <button
        className={`text-[15px] font-bold h-12 bg-[#373b53] rounded-[24px] px-[15px] flex items-center justify-center ${
          darkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"
        }`}
        type="button"
        onClick={handleSubmit(saveDraft)}
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
