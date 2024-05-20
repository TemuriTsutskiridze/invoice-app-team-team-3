import React, { useContext } from "react";
import { useFormContext, FieldError } from "react-hook-form";
import { AppContext } from "../../App";

type InputFieldProps = {
  children: React.ReactNode;
  type: string;
  id: string;
  value?: any;
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
      <label className={`labelStyle mt-6 ${darkMode && "text-[#888eb0]"}`}>
        {children}
      </label>
      <input
        id={id}
        type={type}
        className={`inputStyle inputText ${
          darkMode && "text-white bg-[#1e2139] border-[#252945]"
        } ${id === "itemListItemName" ? "mt-[15px]" : " mt-[9px]"} ${
          errorMessage ? "border-red-700" : ""
        }`}
        value={value}
        {...register(name)}
      />
      {errorMessage && (
        <p
          className={`text-red-700 absolute right-0 top-0 ${
            name.includes("items") && "hidden"
          }`}
        >
          {(errorMessage as FieldError)?.message}
        </p>
      )}
    </div>
  );
};

export default InputField;
