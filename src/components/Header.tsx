import Logo from "../../public/assets/purpleImg.svg"
import Avatar from "../../public/assets/image-avatar.jpg"
import Moon from "../../public/assets/icon-moon.svg"

export default function Header() {
  return (
    <div className=" w-screen">
      <div className=" flex flex-row justify-between w-[100%] bg-[#373B53]">
      <img src={Logo} alt="" className="w-[4.5rem]  "/>
      <div className=" flex items-center justify-between pr-[1.5rem] gap-[2rem]">
        <img src={Moon} alt="" className=" w-[1.24925rem] h-[1.24925rem]"/>
        <div className=" bg-[#494E6E] w-[0.0625rem] h-[100%]"></div>
        <img src={Avatar} alt="" className=" w-[2rem] h-[2rem] rounded-[50%]"/>
      </div>
    </div>
    </div>
  )
}