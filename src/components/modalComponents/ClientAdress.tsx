import { ChangeEvent } from "react";
import InputField from "./InputField";
import { useFormContext } from "react-hook-form";

const ClientAddress = () => {
  const { setValue, trigger } = useFormContext();

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue(name, value);
    await trigger(name);
  };
  return (
    <div className="mt-[41px]">
      <p className="inputText text-blue">Bill To</p>
      <InputField
        id="ClientsName"
        type="text"
        name="clientName"
        onChangeFunc={handleChange}
      >
        Client’s Name
      </InputField>
      <InputField
        id="ClientsEmail"
        type="email"
        name="clientEmail"
        onChangeFunc={handleChange}
      >
        Client’s Email
      </InputField>
      <InputField
        id="ClientAdress"
        type="text"
        name="clientAddress.street"
        onChangeFunc={handleChange}
      >
        Street Address
      </InputField>
      <div>
        <div className="flex gap-4">
          <div className="halfSize">
            <InputField
              id="Client-City"
              type="text"
              name="clientAddress.city"
              onChangeFunc={handleChange}
            >
              City
            </InputField>
          </div>
          <div className="halfSize">
            <InputField
              id="Client-PostCode"
              type="text"
              name="clientAddress.postCode"
              onChangeFunc={handleChange}
            >
              Post Code
            </InputField>
          </div>
        </div>
        <InputField
          id="ClientCountry"
          type="text"
          name="clientAddress.country"
          onChangeFunc={handleChange}
        >
          Country
        </InputField>
      </div>
    </div>
  );
};

export default ClientAddress;
