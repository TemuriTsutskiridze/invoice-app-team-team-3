import React, { useContext } from "react";
import { useFormContext, FieldError, FieldErrors, FieldValues } from "react-hook-form";
import { AppContext } from "../../App";

type InputFieldProps = {
  children: React.ReactNode;
  type: string;
  id: string;
  value?: string;
  name: string;
};

const getNestedValue = (obj: FieldErrors<FieldValues>, path: string): FieldError | undefined => {
  return path
    .split(/[.\\[\]]+/)
    .filter(Boolean)
    .reduce((acc: FieldErrors<FieldValues> | FieldError | undefined, part) => {
      if (acc && typeof acc === 'object') {
        return (acc as FieldErrors<FieldValues>)[part];
      }
      return undefined;
    }, obj) as FieldError | undefined;
};


const InputField: React.FC<InputFieldProps> = ({
  children,
  type,
  id,
  value,
  name,
}) => {
  const { darkMode } = useContext(AppContext);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getNestedValue(errors, name);
  return (
    <div className="relative ">
      <label
        className={`labelStyle mt-6 ${
          darkMode
            ? "text-[#888eb0]"
            : errorMessage
            ? "text-[#EC5757]"
            : "text-[#7E88C3]"
        }`}
      >
        {children}
      </label>
      <input
        id={id}
        type={type}
        className={`inputStyle inputText pr-[10px]  ${
          darkMode
            ? "text-white  focus:border-[#7C5DFA] border-[1px] bg-[#1e2139] border-solid border-[#252945]"
            : " border-[#DFE3FA] border-solid border-[1px] focus:border-[#9277FF] "
        } ${id === "itemListItemName" ? "mt-[15px]" : " mt-[9px]"} ${
          errorMessage ? "border-red-700" : ""
        }`}
        defaultValue={value}
        {...register(name)}
      />
      {errorMessage && (
        <p
          className={`text-[#EC5757] absolute right-0 text-[13px] font-semibold  ${
            name.includes("price") || name.includes("quantity")
              ? "top-6 hidden md:block"
              : "top-0"
          } ${
            name.includes("city") ||
            name.includes("postCode") ||
            name.includes("country")
              ? "md:hidden"
              : "top-0"
          }`}
        >
          {(errorMessage as unknown as FieldError)?.message}
        </p>
      )}
    </div>
  );
};

export default InputField;
