import React from 'react'
import Header from '../components/Header'
import FilterAdd from '../components/FilterAdd'
import InvoiceBoxes from '../components/InvoiceBoxes'


function Invoice() {
  return (
    <div>
      <Header />
      <FilterAdd />
      <InvoiceBoxes />
    </div>
  )
}

export default Invoice