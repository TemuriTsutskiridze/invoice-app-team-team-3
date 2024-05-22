import React, { useContext } from "react";
import { useFormContext, FieldError } from "react-hook-form";
import { AppContext } from "../../App";

type InputFieldProps = {
  children: React.ReactNode;
  type: string;
  id: string;
  value?: any;
  name: string;
  onChangeFunc?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  value,
  name,
  onChangeFunc,
}) => {
  const { darkMode } = useContext(AppContext);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getNestedValue(errors, name);

  return (
    <div className="relative ">
      <label className={`labelStyle mt-6 ${darkMode && "text-[#888eb0]"}`}>
        {children}
      </label>
      <input
        id={id}
        type={type}
        className={`inputStyle inputText border-solid focus:border-[#9277FF]  ${
          darkMode &&
          "text-white focus:border-[#7C5DFA] bg-[#1e2139] border-[#252945]"
        } ${id === "itemListItemName" ? "mt-[15px]" : " mt-[9px]"} ${
          errorMessage ? "border-red-700" : ""
        }`}
        value={value}
        {...register(name)}
        onChange={name.includes("items") ? onChangeFunc : undefined}
      />
      {errorMessage && (
        <p
          className={`text-red-700 absolute right-0  ${
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
