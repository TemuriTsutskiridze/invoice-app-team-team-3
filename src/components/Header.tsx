import { useContext, useState } from "react";
import Logo from "../../public/assets/purpleImg.svg";
import Avatar from "../../public/assets/image-avatar.jpg";
import Moon from "../../public/assets/icon-moon.svg";
import Sun from "../../public/assets/icon-sun.svg";
import { AppContext } from "../App";

export default function Header() {
  const { darkMode, setDarkMode } = useContext(AppContext);
  const [isMoonVisible, setIsMoonVisible] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setIsMoonVisible(!isMoonVisible);
  };

  return (
    <>
      <div className="w-screen relative">
        <div
          className={`flex flex-row justify-between w-[100%] transition ease-out duration-1000 ${
            !darkMode ? "bg-[#373B53]" : "bg-[#1E2139]"
          }
        xl:flex-col xl:w-[6.4375rem] xl:h-screen xl:fixed xl:items-center xl:rounded-[1.8rem] xl:rounded-bl-none xl:rounded-tl-none`}
        >
          <img src={Logo} alt="" className="w-[4.5rem] xl:w-[6.4375rem]" />

          <div
            className="flex items-center justify-between pr-[1.5rem] gap-[2rem]
          xl:flex-col xl:pr-0 xl:w-[100%] cursor-pointer"
          >
            {isMoonVisible ? (
              <img
                src={Moon}
                alt=""
                className={`moon w-[1.24925rem] h-[1.24925rem] xl:mb-6`}
                onClick={toggleDarkMode}
              />
            ) : (
              <img
                src={Sun}
                alt=""
                className={`sun w-[1.24925rem] h-[1.24925rem] xl:mb-6`}
                onClick={toggleDarkMode}
              />
            )}
            <div className="bg-[#494E6E] w-[0.0625rem] h-[100%] xl:w-[100%] xl:h-[0.0625rem]"></div>
            <img
              src={Avatar}
              alt=""
              className="w-[2rem] h-[2rem] rounded-[50%] xl:m-6 xl:w-10 xl:h-10"
            />
          </div>
        </div>
      </div>
    </>
  );
}
