import React, { useContext } from "react";
import { AppContext } from "../App";
import { useParams } from "react-router-dom";
import { InvoiceData } from "../types";

const ViewInvoiceButtons: React.FC = () => {
  const { appData, darkMode, updateInvoiceStatus, setIsDeleteModalVisible } =
    useContext(AppContext);
  const { id } = useParams<{ id: string }>();
  const invoice = appData.find((inv: InvoiceData) => inv.id === id);

  const handleMarkAsPaid = () => {
    if (invoice) {
      updateInvoiceStatus(invoice.id, "paid");
    }
  };

  const handleDeleteClick = () => {
    setIsDeleteModalVisible(true);
  };

  return (
    <>
      <button
        className="w-[73px] py-3 rounded-[24px] lg:hover:bg-[#dfe3fa] lg:transition lg:duration-200"
        style={
          darkMode
            ? { backgroundColor: "#252945", color: "#dfe3fa" }
            : { backgroundColor: "#f9fafe", color: "#7e88c3" }
        }
      >
        Edit
      </button>
      <button
        onClick={handleDeleteClick}
        className="w-[90px] py-3 rounded-[24px] text-[#ffffff] bg-[#ec5757] lg:hover:bg-[#ff9797] lg:transition lg:duration-200"
      >
        Delete
      </button>
      <button
        className="w-[131px] py-3 rounded-[24px] text-[#ffffff] bg-[#7c5dfa] lg:hover:bg-[#9277ff] lg:transition lg:duration-200"
        onClick={handleMarkAsPaid}
        style={
          invoice && invoice.status === "pending"
            ? { display: "block" }
            : { display: "none" }
        }
      >
        Mark as Paid
      </button>
    </>
  );
};

export default ViewInvoiceButtons;
