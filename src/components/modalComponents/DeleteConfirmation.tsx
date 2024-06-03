import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../App";
import { InvoiceData } from "../../types";
import "../../styles/index.css";

const DeleteConfirmation: React.FC = () => {
  const { appData, darkMode, setIsDeleteModalVisible, deleteInvoice } =
    useContext(AppContext);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const invoice = appData.find((inv: InvoiceData) => inv.id === id);

  const handleCancelClick = () => {
    setIsDeleteModalVisible(false);
  };

  const handleDeleteClick = async () => {
    if (id) {
      await deleteInvoice(id);
      setIsDeleteModalVisible(false);
      navigate("/invoices"); // Navigate back to the invoices list after deletion
    }
  };

  return (
    <div className="modal-overlay" onClick={handleCancelClick}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={
          darkMode
            ? { backgroundColor: "#1e2139" }
            : { backgroundColor: "#ffffff" }
        }
      >
        <h1
          className="text-[24px] font-bold mb-2"
          style={darkMode ? { color: "#ffffff" } : { color: "#0c0e16" }}
        >
          Confirm Deletion
        </h1>
        <p className="w-[263px] text-[13px] font-normal text-left mb-[22px] text-[#888eb0]">
          Are you sure you want to delete invoice {invoice ? invoice.id : ""}?
          This action cannot be undone.
        </p>
        <div className="flex gap-2 justify-end items-end">
          <button
            onClick={handleCancelClick}
            className="w-[73px] py-3 rounded-[24px] lg:hover:bg-[#dfe3fa] lg:transition lg:duration-200"
            style={
              darkMode
                ? { backgroundColor: "#252945", color: "#dfe3fa" }
                : { backgroundColor: "#f9fafe", color: "#7e88c3" }
            }
          >
            Cancel
          </button>
          <button
            className="w-[90px] py-3 rounded-[24px] text-[#ffffff] bg-[#ec5757] lg:hover:bg-[#ff9797] lg:transition lg:duration-200"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
