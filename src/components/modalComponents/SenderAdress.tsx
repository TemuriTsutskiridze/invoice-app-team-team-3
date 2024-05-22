import { useFormContext } from "react-hook-form";
import InputField from "./InputField";
import { ChangeEvent } from "react";

const SenderAddress = () => {
  const { setValue, trigger } = useFormContext();

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue(name, value);
     trigger(name);
  };
  return (
    <div>
      <p className="inputText text-blue">Bill From</p>
      <InputField
        id="billFromStreetAdress"
        type="text"
        name="senderAddress.street"
        onChangeFunc={handleChange}
      >
        Street Address
      </InputField>
      <div className="flex gap-4">
        <div className="halfSize">
          <InputField
            id="Sender-City"
            type="text"
            name="senderAddress.city"
            onChangeFunc={handleChange}
          >
            City
          </InputField>
        </div>
        <div className="halfSize">
          <InputField
            id="Sender-PostCode"
            type="text"
            name="senderAddress.postCode"
            onChangeFunc={handleChange}
          >
            Post Code
          </InputField>
        </div>
      </div>
      <InputField
        id="Sender-Country"
        type="text"
        name="senderAddress.country"
        onChangeFunc={handleChange}
      >
        Country
      </InputField>
    </div>
  );
};

export default SenderAddress;
