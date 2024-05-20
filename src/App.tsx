import Invoice from "./pages/Invoice";
import ViewInvoice from "./pages/ViewInvoice";
import { Navigate, Route, Routes } from "react-router";
import { createContext, useEffect, useState } from "react";
import data from "./data.json";
import Header from "./components/Header";
import { Modal } from "./pages";

export const AppContext = createContext<AppContextType>({
  appData: [],
  setAppData: () => {},
  darkMode: false,
  setDarkMode: () => {},
  modal: false,
  setModal: () => {},
});

const App = () => {
  const [appData, setAppData] = useState(data);
  const [darkMode, setDarkMode] = useState(true);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#141625" : "#F8F8FB";
  }, [darkMode]);

  return (
    <AppContext.Provider
      value={{
        appData,
        setAppData,
        darkMode,
        setDarkMode,
        modal,
        setModal,
      }}
    >
      <Header />
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
