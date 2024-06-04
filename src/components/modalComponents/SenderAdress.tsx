import InputField from "./InputField";

const SenderAddress = () => {


  return (
    <div>
      <p className="inputText text-blue">Bill From</p>
      <InputField
        id="billFromStreetAdress"
        type="text"
        name="senderAddress.street"
      >
        Street Address
      </InputField>
        <div className="md:flex gap-6">
          <div className="flex gap-6">
            <div className="halfSize">
              <InputField
                id="Sender-City"
                type="text"
                name="senderAddress.city"
              >
                City
              </InputField>
            </div>
            <div className="halfSize">
              <InputField
                id="Sender-PostCode"
                type="text"
                name="senderAddress.postCode"
              >
                Post Code
              </InputField>
            </div>
          </div>
          <div className="md:w-[152px]">
            <InputField
              id="Sender-Country"
              type="text"
              name="senderAddress.country"
            >
              Country
            </InputField>
          </div>
        </div>
      </div>
  );
};

export default SenderAddress;
