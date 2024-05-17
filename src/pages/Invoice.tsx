import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import FilterAdd from '../components/FilterAdd';
import InvoiceBoxes from '../components/InvoiceBoxes';

type FilterType = "all" | "pending" | "paid" | "draft";
interface ContextType {
  filterClick: FilterType;
  setFilterClick: React.Dispatch<React.SetStateAction<FilterType>>;
}

export const MyContext = React.createContext<ContextType>({
  filterClick: 'all',
  setFilterClick: () => {}
});


function Invoice() {
  const [filterClick, setFilterClick] = useState<FilterType>('all');

  return (
    <MyContext.Provider value={{ filterClick, setFilterClick }}>
      <Header />
      <FilterAdd />
      <InvoiceBoxes />
    </MyContext.Provider>
  );
}

export default Invoice;
