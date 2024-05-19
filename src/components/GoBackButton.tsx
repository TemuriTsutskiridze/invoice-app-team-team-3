import React, { useContext } from "react";
import { AppContext } from "../App";

const GoBackButton: React.FC = () => {
  const { darkMode } = useContext(AppContext);

  return (
    <div className="flex gap-6 items-center">
      <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.342.886L2.114 5.114l4.228 4.228"
          stroke="#9277FF"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
      <p
        className={`text-[13px] font-bold ${
          darkMode ? "text-white" : "text-[#0c0e16]"
        }`}
      >
        Go back
      </p>
    </div>
  );
};

export default GoBackButton;
