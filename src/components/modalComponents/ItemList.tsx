import { useContext, useEffect, useState } from "react";
import DeleteIcon from "/assets/icon-delete.svg";
import { AppContext } from "../../App";
import { useFormContext } from "react-hook-form";
import { InputField } from "..";

interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
  [key: string]: string | number;
}

const ItemList = () => {
  const { darkMode } = useContext(AppContext);
  const {
    formState: { errors },
    setValue,
    trigger,
  } = useFormContext();

  const [items, setItems] = useState<Item[]>([]);
  const [totalSum, setTotalSum] = useState<number>();
  const handleAddItems = () => {
    const newItems = [
      ...items,
      { name: "", quantity: 0, price: 0, total: 0.0 },
    ];
    setItems(newItems);
    setValue("items", newItems);
  };

  const handleDeleteItems = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    setValue("items", newItems);
  };
  const handleQuantityOrPriceChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const newItems = [...items];
    newItems[index][field] = value;

    newItems[index].total = newItems[index].quantity * newItems[index].price;

    setItems(newItems);
    setValue(`items[${index}].${field}`, Number(value));
    trigger(`items[${index}].${field}`);
  };

  useEffect(() => {
    const sum = items.reduce((acc, item) => acc + item.total, 0);
    setTotalSum(sum);
  }, [items]);

  return (
    <div className="mt-[69px]">
      <h3 className="font-bold text-[18px] tracking-[-0.38px] text-[#777f98]">
        Item List
      </h3>

      <div className="mt-[22px] flex flex-col gap-[48px]">
        {items.map((item, index) => (
          <div key={index}>
            <InputField
              id={`item-Name-${index}`}
              type="text"
              name={`items[${index}].name`}
            >
              Item Name
            </InputField>
            <div className="grid grid-cols-2 gap-[65px]">
              <div className="grid grid-cols-inputsGrid gap-4 flex-grow-[2]">
                <InputField
                  id={`item-Quantity-${index}`}
                  type="number"
                  name={`items[${index}].quantity`}
                  onChangeFunc={(e) =>
                    handleQuantityOrPriceChange(
                      index,
                      "quantity",
                      e.target.value
                    )
                  }
                >
                  Qty.
                </InputField>
                <InputField
                  id={`item-Price-${index}`}
                  type="number"
                  name={`items[${index}].price`}
                  onChangeFunc={(e) =>
                    handleQuantityOrPriceChange(index, "price", e.target.value)
                  }
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
                  <p className="mt-[27px] font-bold text-[#888EB0] text-[15px] tracking-[-0.25px]">
                    {item.total}
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
        ))}
        <div
          onClick={() => {
            handleAddItems();
          }}
          className={`${
            darkMode ? "bg-[#252945]" : "bg-[#eaeced]"
          } h-[48px] rounded-3xl flex items-center justify-center cursor-pointer`}
        >
          <p className="text-[#7e88c3] font-bold text-[15px]">+ Add New Item</p>
        </div>
      </div>
      {Object.keys(errors).length > 1 && (
        <p className="text-[#ec5757] text-[10px] font-semibold mt-[30px]">
          - All fields must be Added
        </p>
      )}
      {errors?.items?.message && typeof errors.items.message === "string" && (
        <p
          className={`text-[#ec5757] text-[10px] font-semibold ${
            Object.keys(errors).length < 1 ? "mt-[30px]" : "mt-5px"
          }`}
        >
          {errors.items.message}
        </p>
      )}
    </div>
  );
};

export default ItemList;
