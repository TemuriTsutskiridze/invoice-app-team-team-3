import InputField from "./InputField";
import DeleteIcon from "/assets/icon-delete.svg";

const ItemList = () => {
  return (
    <div className="mt-[69px] ">
      <h3 className="font-bold text-[18px] tracking-[-0.38px] text-[#777f98]">
        Item List
      </h3>
      <div className="mt-[22px] flex flex-col gap-[48px] ">
        <div>
          <div>
            <label className="labelStyle">Item Name</label>
            <input type="text" className="inputStyle inputText mt-[15px]" />
          </div>
          <div className="flex  gap-[65px]">
            <div className="flex gap-4">
              <InputField type={"number"}>Qty.</InputField>
              <InputField type={"number"}>Price</InputField>
              <div>
                <p className="labelStyle mt-6">Total</p>
                <p className="mt-[25px] text-[15px] font-bold tracking-[-0.25px] text-[#888eb0]">
                  400
                </p>
              </div>
            </div>
            <div className="pt-[70px] ml-auto">
              <img src={DeleteIcon} />
            </div>
          </div>
        </div>
        <div className="bg-[#eaeced] h-[48px] rounded-3xl flex items-center justify-center">
          <p className="text-[#7e88c3] font-bold text-[15px] ">+ Add New Item</p>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
