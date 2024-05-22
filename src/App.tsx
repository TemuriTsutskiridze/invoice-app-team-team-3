import Invoice from "./pages/Invoice";
import ViewInvoice from "./pages/ViewInvoice";
import { Navigate, Route, Routes } from "react-router";
import { createContext, useEffect, useState } from "react";
import data from "./data.json";
import Header from "./components/Header";
import { Modal } from "./pages";
import { AppContextType, InvoiceData } from "./types";

export const AppContext = createContext<AppContextType>({
  appData: [],
  setAppData: () => {},
  darkMode: false,
  setDarkMode: () => {},
  updateInvoiceStatus: () => {},
  isDeleteModalVisible: false,
  setIsDeleteModalVisible: () => {},
  deleteInvoice: () => {},
});

const App = () => {
  const [appData, setAppData] = useState<InvoiceData[]>(() => {
    const storedData = localStorage.getItem("appData");
    return storedData ? JSON.parse(storedData) : data;
  });

  useEffect(() => {
    localStorage.setItem("appData", JSON.stringify(appData));
  }, [appData]);

  const [darkMode, setDarkMode] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#141625" : "#F8F8FB";
  }, [darkMode]);

  const updateInvoiceStatus = (id: string, status: string) => {
    setAppData((prevData) =>
      prevData.map((invoice) =>
        invoice.id === id ? { ...invoice, status } : invoice
      )
    );
  };

  const deleteInvoice = (id: string) => {
    setAppData((prevData) => prevData.filter((invoice) => invoice.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        appData,
        setAppData,
        darkMode,
        setDarkMode,
        updateInvoiceStatus,
        isDeleteModalVisible,
        setIsDeleteModalVisible,
        deleteInvoice,
      }}
    >
      <Header />
      {/* <Modal /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/invoices" />} />
        <Route path="/invoices" element={<Invoice />} />
        <Route path="/view-invoice/:id" element={<ViewInvoice />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
