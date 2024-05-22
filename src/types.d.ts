import React from "react";

interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

interface InvoiceData {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: { id: number; name: string };
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
}

interface AppContextType {
  appData: InvoiceData[];
  setAppData: React.Dispatch<React.SetStateAction<InvoiceData[]>>;
  darkMode: boolean;
  isDeleteModalVisible: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  updateInvoiceStatus: (id: string, status: string) => void;
  setIsDeleteModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  deleteInvoice: (id: string) => void;
  isMoonVisible: boolean;
  setIsMoonVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
