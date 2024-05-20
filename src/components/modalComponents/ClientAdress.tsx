import InputField from "./InputField";

const ClientAddress = () => {
  return (
    <div className="mt-[41px]">
      <p className="inputText text-blue">Bill To</p>
      <InputField id="ClientsName" type="text" name="clientName">
        Client’s Name
      </InputField>
      <InputField id="ClientsEmail" type="email" name="clientEmail">
        Client’s Email
      </InputField>
      <InputField id="ClientAdress" type="text" name="clientAddress.street">
        Street Address
      </InputField>
      <div>
        <div className="flex gap-4">
          <div className="halfSize">
            <InputField id="Client-City" type="text" name="clientAddress.city">
              City
            </InputField>
          </div>
          <div className="halfSize">
            <InputField
              id="Client-PostCode"
              type="text"
              name="clientAddress.postCode"
            >
              Post Code
            </InputField>
          </div>
        </div>
        <InputField id="ClientCountry" type="text" name="clientAddress.country">
          Country
        </InputField>
      </div>
    </div>
  );
};

export default ClientAddress;
