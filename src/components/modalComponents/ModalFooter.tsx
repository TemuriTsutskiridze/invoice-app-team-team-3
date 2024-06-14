import React, { useContext } from "react";
import { AppContext } from "../../App";
import { useFormContext } from "react-hook-form";
import axios from "axios";
import { generateId } from "./functions";

const ModalFooter: React.FC = () => {
  const { darkMode, setModal, invoiceId } = useContext(AppContext);
  const {
    handleSubmit,
    reset,
    clearErrors,
    setError,
    formState: { errors },
  } = useFormContext();

  const addInvoice = async (data: any) => {
    if (data.items.length > 0) {
      clearErrors(data.items);
      const { createdAt, paymentTerms, items } = data;
      const dueDate = new Date(createdAt);
      dueDate.setDate(dueDate.getDate() + parseInt(paymentTerms));
      const paymentDue = dueDate.toISOString().split("T")[0];
      let total = 0;
      items.forEach((item: any) => {
        total += item.total;
      });
      const allInfo = {
        ...data,
        paymentDue,
        id: generateId(),
        status: { name: "saved" },
        total,
      };
      if (invoiceId === "") {
        try {
          const result = await axios.post(
            "https://invoice-project-team-3.onrender.com/api/invoice/",
            allInfo
          );
          console.log(result.data);
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const result = await axios.put(
            `https://invoice-project-team-3.onrender.com/api/invoice/${invoiceId}`,
            allInfo
          );
          console.log(result.data);
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      setError("items", {
        type: "auto",
        message: "At least one item is required",
      });
    }
  };

  console.log(errors);

  const handleSaveandSendClick = () => {
    handleSubmit(addInvoice)();
  };

  const handleDiscard = () => {
    setModal(false);
    reset();
    clearErrors();
  };

  return (
    <footer
      className={`${
        darkMode ? "bg-[#1e2139]" : "bg-[#fff]  submitGroup"
      } xl:left-[100px]  md:w-[616px] px-6 flex justify-center w-full bottom-0 left-0 py-[22px] gap-[7px]  mt-[88px] fixed md:rounded-e-lg md:rounded-r-lg `}
    >
      {invoiceId === "" ? (
        <>
          <button
            onClick={handleDiscard}
            type="submit"
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
            type="submit"
          >
            Save as Draft
          </button>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleSaveandSendClick();
            }}
            className="text-[#fff] text-[15px] font-bold h-12 bg-[#7c5dfa] rounded-[24px] px-[15px] flex items-center justify-center"
          >
            Save & Send
          </button>{" "}
        </>
      ) : (
        <>
          <button
            onClick={handleDiscard}
            type="submit"
            className={`text-[15px] font-bold h-12 rounded-[24px] px-[18px] flex items-center justify-center ${
              darkMode
                ? "bg-[#252945] text-[#dfe3fa]"
                : "bg-[#f9fafe] text-[#7e88c3]"
            }`}
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleSaveandSendClick();
            }}
            className="text-[#fff] text-[15px] font-bold h-12 bg-[#7c5dfa] rounded-[24px] px-[15px] flex items-center justify-center"
          >
            Save & Send
          </button>{" "}
        </>
      )}
    </footer>
  );
};

export default ModalFooter;
