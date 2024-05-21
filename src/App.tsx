import "./App.css";
import Invoice from "./pages/Invoice";
import ViewInvoice from "./pages/ViewInvoice";
import { Navigate, Route, Routes } from "react-router";
import { createContext, useEffect, useState } from "react";
import data from "./data.json";
import { AppContextType } from "./types";
import Header from "./components/Header";

export const AppContext = createContext<AppContextType>({
  appData: [],
  setAppData: () => {},
  darkMode: false,
  setDarkMode: () => {},
  updateInvoiceStatus: () => {},
});

const App = () => {
  const [appData, setAppData] = useState<InvoiceData[]>(() => {
    const storedData = localStorage.getItem("appData");
    return storedData ? JSON.parse(storedData) : data;
  });

  useEffect(() => {
    localStorage.setItem("appData", JSON.stringify(appData));
  }, [appData]);

  const [darkMode, setDarkMode] = useState(true);

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

  return (
    <AppContext.Provider
      value={{
        appData,
        setAppData,
        darkMode,
        setDarkMode,
        updateInvoiceStatus,
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/invoices" />} />
        <Route path="/invoices" element={<Invoice />} />
        <Route path="/view-invoice/:id" element={<ViewInvoice />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
