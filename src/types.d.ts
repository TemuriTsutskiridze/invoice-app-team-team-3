import React from "react";

interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

type Item = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

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
interface FormData {
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  clientEmail: string;
  clientName: string;
  description: string;
  paymentTerms: string;
  paymentDue: string;
}

interface InputFieldProps {
  children: React.ReactNode;
  type: string;
  id: string;
  value?: string | number;
  name: any;
}

interface FormValues {
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientName: string;
  clientEmail: string;
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  paymentDue: string;
  paymentTerms: string;
  description: string;
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  updateInvoiceStatus: (id: string, status: string) => void;
  setIsDeleteModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  deleteInvoice: (id: string) => void;
  isMoonVisible: boolean;
  setIsMoonVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
type SchemaType = {
  senderAddress: {
    streetAddress: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    name: string;
    email: string;
    streetAddress: string;
    city: string;
    postCode: string;
  };
  paymentTerms: {
    invoiceDate: string;
    payTerms: string;
    description: string;
  };
  itemList: {
    name: string;
    quantity: number;
    price: number;
  }[];
};

interface InvoiceData {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
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
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

type Address = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};

type Item = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

type Invoice = {
  id: string;
  createdAt: Date;
  paymentDue: Date;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: { name: string; id: number };
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
};
