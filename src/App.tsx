import "./App.css";
import Invoice from "./pages/Invoice";
import { Navigate, Route, Routes } from "react-router";
import { createContext, useState } from "react";
import data from "./data.json";
import { AppContextType } from "./types";

export const AppContext = createContext<AppContextType>({
  appData: [],
  setAppData: () => {},
  darkMode: false,
  setDarkMode: () => {},
});

const App = () => {
  const [appData, setAppData] = useState(data);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <AppContext.Provider
      value={{
        appData,
        setAppData,
        darkMode,
        setDarkMode,
      }}
    >
      <Routes>
        <Route path="/" element={<Navigate to="/invoices" />} />
        <Route path="/invoices" element={<Invoice />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
