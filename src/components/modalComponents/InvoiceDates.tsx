import InputField from "./InputField";

const InvoiceDates = () => {
  return (
    <div className="pt-[26px]">
      <InputField id="paymentDue" type="date" name="paymentDue">
        Invoice Date
      </InputField>
      <InputField id="InvoiceDatesPaymentTerms" type="text" name="paymentTerms">
        Payment Terms
      </InputField>
      <InputField id="InvoiceDatesProjectDesc" type="text" name="description">
        Project Description
      </InputField>
    </div>
  );
};

export default InvoiceDates;
