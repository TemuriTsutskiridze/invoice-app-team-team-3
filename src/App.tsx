import Invoice from "./pages/Invoice";
import ViewInvoice from "./pages/ViewInvoice";
import { Navigate, Route, Routes } from "react-router";
import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import { AppContextType, InvoiceData } from "./types";
import { Modal } from "./pages";

export const AppContext = createContext<AppContextType>({
  appData: [],
  setAppData: () => {},
  darkMode: false,
  setDarkMode: () => {},
  updateInvoiceStatus: () => {},
  isDeleteModalVisible: false,
  setIsDeleteModalVisible: () => {},
  deleteInvoice: () => {},
  isMoonVisible: true,
  setIsMoonVisible: () => {},
  modal: false,
  setModal: () => {},
});

const App = () => {
  const [appData, setAppData] = useState<InvoiceData[]>([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [isMoonVisible, setIsMoonVisible] = useState(true);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [modal, setModal] = useState<boolean>(false);

  type StatusType = { id: number; name: string };

  const statusMapping: { [key: string]: StatusType } = {
    draft: { id: 1, name: "Draft" },
    pending: { id: 2, name: "Pending" },
    paid: { id: 3, name: "Paid" },
  };

  const updateInvoiceStatus = (id: string, status: string) => {
    if (!statusMapping[status]) {
      throw new Error(`Invalid status: ${status}`);
    }

    setAppData((prevData) =>
      prevData.map((invoice) =>
        invoice.id === id
          ? { ...invoice, status: statusMapping[status] }
          : invoice
      )
    );
  };

  const deleteInvoice = async (id: string) => {
    try {
      const response = await fetch(
        `https://invoice-project-team-3.onrender.com/api/invoice/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete invoice");
      }
      setAppData((prevData) => prevData.filter((invoice) => invoice.id !== id));
    } catch (error) {
      console.error("Failed to delete invoice:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://invoice-project-team-3.onrender.com/api/invoice/"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setAppData(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AppContext.Provider
      value={{
        appData,
        setAppData,
        darkMode,
        setDarkMode,
        isMoonVisible,
        setIsMoonVisible,
        updateInvoiceStatus,
        isDeleteModalVisible,
        setIsDeleteModalVisible,
        deleteInvoice,
        modal,
        setModal,
      }}
    >
      <Header />
      <span className={`animatedBg ${darkMode ? "second" : "first"}`}></span>
      <Modal />
      <Routes>
        <Route path="/" element={<Navigate to="/invoices" />} />
        <Route path="/invoices" element={<Invoice />} />
        <Route path="/view-invoice/:id" element={<ViewInvoice />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
