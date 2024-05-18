import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import FilterAdd from '../components/FilterAdd';
import InvoiceBoxes from '../components/InvoiceBoxes';
import EmptyInvoices from '../components/EmptyInvoices';
import data from "../data.json"

type FilterType = "all" | "pending" | "paid" | "draft";
interface ContextType {
  filterClick: FilterType;
  setFilterClick: React.Dispatch<React.SetStateAction<FilterType>>;
  isMobile: boolean;
  setIsMobile:  React.Dispatch<React.SetStateAction<boolean>>;
  isDesktop: boolean;
  setIsDesktop: React.Dispatch<React.SetStateAction<boolean>>;
  modalPage: boolean;
  setModalPage: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MyContext = React.createContext<ContextType>({
  filterClick: 'all',
  setFilterClick: () => {}, 
  isMobile: false,
  setIsMobile: () => {},
  isDesktop: false,
  setIsDesktop: () => {},
  modalPage: false,
  setModalPage: () => {}
});

function Invoice() {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isDesktop, setIsDesktop] = useState<boolean>(false)
  const [filterClick, setFilterClick] = useState<FilterType>('all');
  const [modalPage, setModalPage] = useState<boolean>(false)

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
    <MyContext.Provider value={{ filterClick, setFilterClick, isMobile, setIsMobile, isDesktop, setIsDesktop,modalPage,setModalPage  }}>
      <Header />
      <FilterAdd />
      {data.length === 0 ? <EmptyInvoices /> : <InvoiceBoxes />}
    </MyContext.Provider>
  );
}

export default Invoice;
