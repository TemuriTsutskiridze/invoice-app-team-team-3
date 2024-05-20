export interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface InvoiceData {
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

export interface AppContextType {
  appData: InvoiceData[];
  setAppData: React.Dispatch<React.SetStateAction<InvoiceData[]>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  updateInvoiceStatus: (id: string, status: string) => void;
}
