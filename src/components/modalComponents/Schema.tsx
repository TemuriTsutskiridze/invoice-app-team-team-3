import * as yup from "yup";

const Schema = yup.object().shape({
  senderAddress: yup.object().shape({
    street: yup
      .string()
      .min(5, "Must be at least 5 characters")
      .max(20, "Must be at most 20 characters")
      .required("Street address is required"),
    city: yup
      .string()
      .min(3, "Must be at least 3 characters")
      .max(20, "Must be at most 20 characters")
      .required("City is required"),
    postCode: yup
      .string()
      .min(4, "Must be at least 4 characters")
      .max(8, "Must be at most 8 characters")
      .required("Postal code is required"),
    country: yup
      .string()
      .min(3, "Must be at least 3 characters")
      .max(15, "Must be at most 15 characters")
      .required("Country is required"),
  }),
  clientAddress: yup.object().shape({
    street: yup
      .string()
      .min(5, "Must be at least 5 characters")
      .max(20, "Must be at most 20 characters")
      .required("Street address is required"),
    city: yup
      .string()
      .min(3, "Must be at least 3 characters")
      .max(20, "Must be at most 20 characters")
      .required("City is required"),
    postCode: yup
      .string()
      .min(4, "Must be at least 4 characters")
      .max(8, "Must be at most 8 characters")
      .required("Postal code is required"),
    country: yup
      .string()
      .min(3, "Must be at least 3 characters")
      .max(15, "Must be at most 15 characters")
      .required("Country is required"),
  }),
  items: yup
    .array()
    .of(
      yup.object().shape({
        name: yup
          .string()
          .min(3, "Must be at least 3 characters")
          .max(15, "Must be at most 15 characters")
          .required("Item name is required"),
        quantity: yup
          .number()
          .positive("Invalid quantity")
          .typeError("Invalid price: Must be a number")
          .required("Quantity is required"),
        price: yup
          .number()
          .positive("Invalid price")
          .typeError("Invalid price: Must be a number")
          .required("Price is required"),
        total: yup.number(),
      })
    )
    .min(1, "- AN Item must be added"),
  clientEmail: yup.string().email().required("Client email is required"),
  clientName: yup.string().required("Client name is required"),
  description: yup.string().required("Description is required"),
  paymentTerms: yup.string().required("Payment terms are required"),
  paymentDue: yup.string().required("Payment due date is required"),
});

export default Schema;
