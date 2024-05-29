import React, { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { AppContext } from "../../App";

type InputFieldProps = {
  children: React.ReactNode;
  type: string;
  id: string;
  name: string;
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

  const errorMessage = errors[name]?.message;
  const errorText = typeof errorMessage === "string" ? errorMessage : undefined;

  return (
    <div className="relative">
      <label
        className={`labelStyle mt-6 ${
          darkMode
            ? "text-[#888eb0]"
            : errorText
            ? "text-[#EC5757]"
            : "text-[#7E88C3]"
        }`}
      >
        {children}
      </label>
      <input
        id={id}
        type={type}
        min={type === "number" ? 0 : undefined}
        className={`inputStyle inputText pr-[10px]  ${
          darkMode
            ? "text-white focus:border-[#7C5DFA] bg-[#1e2139] border-[#252945]"
            : "border-[#DFE3FA] border-solid border-[1px] focus:border-[#9277FF]"
        } ${id === "itemListItemName" ? "mt-[15px]" : "mt-[9px]"} ${
          errorText ? "border-red-700" : ""
        }`}
        {...register(name)}
      />
      {errorText && (
        <p
          className={`text-[#EC5757] absolute right-0 text-[13px] font-semibold ${
            name.includes("price") || name.includes("quantity")
              ? "top-6"
              : "top-0"
          }`}
        >
          {errorText}
        </p>
      )}
    </div>
  );
};

export default InputField;
