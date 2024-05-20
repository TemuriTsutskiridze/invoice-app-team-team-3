import React, { useContext } from "react";
import { AppContext } from "../App";
import { useParams } from "react-router-dom";

const ViewInvoiceButtons: React.FC = () => {
  const { appData, darkMode } = useContext(AppContext);
  const { id } = useParams<{ id: string }>();
  const invoice = appData.find((inv) => inv.id === id);
  return (
    <>
      <button
        className="w-[73px] py-3 rounded-[24px]"
        style={
          darkMode
            ? { backgroundColor: "#252945", color: "#dfe3fa" }
            : { backgroundColor: "#f9fafe", color: "#7e88c3" }
        }
      >
        Edit
      </button>
      <button className="w-[90px] py-3 rounded-[24px] text-[#ffffff] bg-[#ec5757]">
        Delete
      </button>
      <button
        className="w-[131px] py-3 rounded-[24px] text-[#ffffff] bg-[#7c5dfa]"
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
