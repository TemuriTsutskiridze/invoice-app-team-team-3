import React, { useContext, useEffect, useState } from "react";
import FilterAdd from "../components/FilterAdd";
import InvoiceBoxes from "../components/InvoiceBoxes";
import EmptyInvoices from "../components/EmptyInvoices";
import data from "../data.json";

type FilterType = "all" | "pending" | "paid" | "draft";
interface ContextType {
  filterClick: FilterType;
  setFilterClick: React.Dispatch<React.SetStateAction<FilterType>>;
  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
  isDesktop: boolean;
  setIsDesktop: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MyContext = React.createContext<ContextType>({
  filterClick: "all",
  setFilterClick: () => {},
  isMobile: false,
  setIsMobile: () => {},
  isDesktop: false,
  setIsDesktop: () => {},

});

function Invoice() {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isDesktop, setIsDesktop] = useState<boolean>(false)
  const [filterClick, setFilterClick] = useState<FilterType>('all');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 768);
      setIsDesktop(window.innerWidth >= 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MyContext.Provider value={{ filterClick, setFilterClick, isMobile, setIsMobile, isDesktop, setIsDesktop }}>
      <FilterAdd />
      {data.length === 0 ? <EmptyInvoices /> : <InvoiceBoxes />}
    </MyContext.Provider>
  );
}

export default Invoice;
