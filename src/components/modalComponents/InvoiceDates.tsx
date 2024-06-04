import { Controller, useFormContext } from "react-hook-form";
import InputField from "./InputField";
import { useContext } from "react";
import { AppContext } from "../../App";

const InvoiceDates = () => {
  const { control } = useFormContext();
  const { darkMode } = useContext(AppContext);

  return (
    <div className="pt-[26px]">
      <InputField id="paymentDue" type="date" name="createdAt">
        Invoice Date
      </InputField>
      <Controller
        name="paymentTerms"
        control={control}
        render={({ field }) => (
          <div>
            <label
              className={`labelStyle mt-4 ${
                darkMode
                  ? "text-[#888eb0]"
                  : "text-[#7E88C3]"
              }`}
              htmlFor="paymentTerms "
            >
              Payment Terms
            </label>
            <select
              className={` ${
                darkMode
                  ? "text-white  focus:border-[#7C5DFA] bg-[#1e2139] border-none"
                  : " border-[#DFE3FA] border-solid border-[1px] focus:border-[#9277FF] "
              } outline-none w-full rounded-[5px] border-[#DFE3FA] pl-5 border-solid border-[1px] p-0 h-12 inputText styled-select`}
              id="paymentTerms inputStyle"
              {...field}
            >
              <option className=" h-[40px] hover:font-bold " value="1">
                Net 1 Day
              </option>
              <option value="7">Net 7 Days</option>
              <option value="14">Net 14 Days</option>
              <option value="30">Net 30 Days</option>
            </select>
          </div>
        )}
      />
      <InputField id="InvoiceDatesProjectDesc" type="text" name="description">
        Project Description
      </InputField>
    </div>
  );
};

export default InvoiceDates;
