import React, { useContext } from "react";
import { useFormContext, FieldError } from "react-hook-form";
import { AppContext } from "../../App";
import { error } from "console";

type InputFieldProps = {
  children: React.ReactNode;
  type: string;
  id: string;
  name: string;
};

const getNestedValue = (obj: any, path: string) => {
  return path
    .split(/[\.\[\]]+/)
    .filter(Boolean)
    .reduce((acc, part) => acc && acc[part], obj);
};

const InputField: React.FC<InputFieldProps> = ({
  children,
  type,
  id,
  name,
}) => {
  const { darkMode } = useContext(AppContext);
  const {
    register,
    formState: { errors },
  } = useFormContext();
  console.log(errors);

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
            ? "text-white  focus:border-[#7C5DFA] bg-[#1e2139] border-[#252945]"
            : " border-[#DFE3FA] border-solid border-[1px] focus:border-[#9277FF] "
        } ${id === "itemListItemName" ? "mt-[15px]" : " mt-[9px]"} ${
          errorMessage ? "border-red-700" : ""
        }`}
        {...register(name)}
      />

      {errorMessage && (
        <p
          className={`text-[#EC5757] absolute right-0 text-[13px] font-semibold  ${
            name.includes("price") || name.includes("quantity")
              ? "top-6"
              : "top-0"
          }`}
        >
          {(errorMessage as FieldError)?.message}
        </p>
      )}
    </div>
  );
};

export default InputField;
