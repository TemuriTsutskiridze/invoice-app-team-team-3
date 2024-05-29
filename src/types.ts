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

export interface InvoiceFormValues {
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
}
