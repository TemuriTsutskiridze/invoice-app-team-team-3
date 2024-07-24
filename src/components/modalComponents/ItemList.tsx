import { SetStateAction, useContext, useEffect } from "react";
import DeleteIcon from "/assets/icon-delete.svg";
import { AppContext } from "../../App";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { InputField } from "..";
import { InvoiceData } from "../../types";

const ItemList: React.FC<{
  clickSubmit: number;
  setClickSubmit: React.Dispatch<SetStateAction<number>>;
}> = ({ clickSubmit, setClickSubmit }) => {
  const { darkMode } = useContext(AppContext);
  const {
    formState: { errors },
    register,
    control,
    setValue,
    clearErrors,
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    rules: { minLength: 1 },
    control,
    name: "items",
  });
  const items = useWatch({
    name: "items",
    control,
  });

  const handleAddItems = async () => {
    append({ name: "", quantity: 0, price: 0, total: 0 });
  };

  const handleDeleteItems = (index: number) => {
    remove(index);
  };
  useEffect(() => {
    if (items && items.length > 1) {
      setClickSubmit(0);
    } else if (items && items.length === 0) {
      setClickSubmit(1);
    }
  }, [items, setClickSubmit, handleAddItems]);

  useEffect(() => {
    if (items && items.length > 0) {
      items.forEach((item: InvoiceData, index: number) => {
        const total = item.quantity * item.price;
        if (total !== item.total) {
          setValue(`items[${index}].total`, total);
        }
      });
      if (clickSubmit === 1) {
        clearErrors("items[0]");
      }
    }
  }, [items, setValue, setClickSubmit]);

  return (
    <div className="mt-[69px]">
      <h3 className="font-bold text-[18px] tracking-[-0.38px] text-[#777f98]">
        Item List
      </h3>

      <div className="mt-[22px] flex flex-col gap-[48px]">
        {fields.map((field, index) => (
          <div key={field.id}>
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
                >
                  Qty.
                </InputField>
                <InputField
                  id={`item-Price-${index}`}
                  type="number"
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
                  <input
                    readOnly
                    value={items && items[index] ? items[index].total : 0}
                    {...register(`items[${index}].total`)}
                    className={`outline-none mt-[27px] font-bold text-[#888EB0] text-[15px] tracking-[-0.25px] ${
                      darkMode && "bg-[#141625]"
                    }`}
                  />
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
          onClick={handleAddItems}
          className={`${
            darkMode ? "bg-[#252945]" : "bg-[#eaeced]"
          } h-[48px] rounded-3xl flex items-center justify-center cursor-pointer`}
        >
          <p className="text-[#7e88c3] font-bold text-[15px]">+ Add New Item</p>
        </div>
      </div>
      {Object.keys(errors).length > 1 && (
        <p className="text-[#ec5757] text-[10px] font-semibold mt-[30px]">
          - All fields must be filled
        </p>
      )}
      {errors?.items && typeof errors.items.message === "string" && (
        <p
          className={`text-[#ec5757] text-[10px] font-semibold ${
            Object.keys(errors).length === 1 ? "mt-[30px]" : "mt-5px"
          }`}
        >
          {errors.items.message}
        </p>
      )}
    </div>
  );
};

export default ItemList;
