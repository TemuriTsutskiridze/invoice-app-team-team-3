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
  isMoonVisible: true,
  setIsMoonVisible: () => {},
});

const App = () => {
  const [appData, setAppData] = useState(data);
  const [darkMode, setDarkMode] = useState(false);
  const [isMoonVisible, setIsMoonVisible] = useState(true);

  return (
    <AppContext.Provider
      value={{
        appData,
        setAppData,
        darkMode,
        setDarkMode,
        isMoonVisible,
        setIsMoonVisible,
      }}
    >
      <Header />
      <span className={`animatedBg ${darkMode ? "second" : "first"}`}></span>
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
