import { useContext, useState } from "react";
import InputField from "./InputField";
import DeleteIcon from "/assets/icon-delete.svg";
import { AppContext } from "../../App";
import { useFormContext } from "react-hook-form";
import { object } from "yup";

interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

const ItemList = () => {
  //using context
  const { darkMode } = useContext(AppContext);
  const {
    formState: { errors },
    setValue,
    trigger,
  } = useFormContext();
  //declare states
  const [items, setItems] = useState<Item[]>([]);

  //item add and delete function
  const handleAddItems = () => {
    setItems((prevItems) => [
      ...prevItems,
      { name: "", quantity: 0, price: 0, total: 0 },
    ]);
  };

  const handleDeleteItems = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);

    setValue("items", newItems);
    trigger("items");
  };

  console.log(items);
  console.log(errors);
  return (
    <div className="mt-[69px]">
      <h3 className="font-bold text-[18px] tracking-[-0.38px] text-[#777f98]">
        Item List
      </h3>

      <div className="mt-[22px] flex flex-col gap-[48px]">
        {items.length > 0
          ? items.map((item, index) => (
              <div key={index}>
                <InputField
                  id={`item-Name-${index}`}
                  type="text"
                  // value={item?.name}
                  name={`items[${index}].name`}
                >
                  Item Name
                </InputField>
                <div className="grid grid-cols-2 gap-[65px]">
                  <div className="grid grid-cols-inputsGrid gap-4 flex-grow-[2]">
                    <InputField
                      id={`item-Quantity-${index}`}
                      type="number"
                      // value={item.quantity}
                      name={`items[${index}].quantity`}
                    >
                      Qty.
                    </InputField>
                    <InputField
                      id={`item-Price-${index}`}
                      type="number"
                      // value={item.price}
                      name={`items[${index}].price`}
                    >
                      Price
                    </InputField>
                    <div>
                      <p
                        className={`labelStyle mt-6 ${
                          darkMode && "text-[#888eb0]"
                        }`}
                      >
                        Total
                      </p>
                      <p className="mt-[25px] text-[15px] font-bold tracking-[-0.25px] text-[#888eb0]">
                        {/* {item.total} */}
                      </p>
                    </div>
                  </div>
                  <div className="pt-[70px] justify-self-end">
                    <img
                      onClick={() => handleDeleteItems(index)}
                      src={DeleteIcon}
                      className="max-w-max cursor-pointer"
                      alt="Delete"
                    />
                  </div>
                </div>
              </div>
            ))
          : ""}
        <div
          onClick={handleAddItems}
          className={`${
            darkMode ? "bg-[#252945]" : "bg-[#eaeced]"
          } h-[48px] rounded-3xl flex items-center justify-center cursor-pointer`}
        >
          <p className="text-[#7e88c3] font-bold text-[15px]">+ Add New Item</p>
        </div>
      </div>
      {Object.keys(errors).length > 1 && (
        <p className="text-[#ec5757] text-[10px] font-semibold mt-[30px] ">
          - All fields must be Added
        </p>
      )}
      {errors.items && typeof errors.items.message === "string" && (
        <p className="text-[#ec5757] mt-5px text-[10px] font-semibold">
          {errors.items.message}
        </p>
      )}
    </div>
  );
};

export default ItemList;
