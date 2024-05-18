import Logo from "../../public/assets/purpleImg.svg"
import Avatar from "../../public/assets/image-avatar.jpg"
import Moon from "../../public/assets/icon-moon.svg"
import { useContext } from "react"
import { MyContext } from "../pages/Invoice"
import React from "react"

export default function Header() {
  const {isDesktop} = useContext(MyContext)
  return (
    <div className=" w-screen relative" >
      <div
       className=" flex flex-row justify-between w-[100%] bg-[#373B53]
        xl:flex-col xl:w-[6.4375rem] xl:h-screen xl:fixed xl:items-center xl:rounded-[1.8rem] xl:rounded-bl-none xl:rounded-tl-none">
      <img src={Logo} alt="" className="w-[4.5rem] xl:w-[6.4375rem] "/>
      <div
       className=" flex items-center justify-between pr-[1.5rem] gap-[2rem]
        xl:flex-col xl:pr-0 xl:w-[100%]">
        <img src={Moon} alt="" className=" w-[1.24925rem] h-[1.24925rem] xl:mb-6"/>
        <div className=" bg-[#494E6E] w-[0.0625rem] h-[100%] xl:w-[100%] xl:h-[0.0625rem]"></div>
        <img src={Avatar} alt="" className=" w-[2rem] h-[2rem] rounded-[50%] xl:m-6 xl:w-10 xl:h-10"/>
      </div>
    </div>
    </div>
  )
}