import { CgDarkMode } from "react-icons/cg"
import { ButtonCommon, LogoCommon } from "../common"
import { BsPerson } from "react-icons/bs"
import { BiSearch } from "react-icons/bi"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between container py-1 px-2 bg-tahiti">
        <div className="flex-none w-32">
            <LogoCommon />
        </div>
        <div className="flex-auto w-64"></div>
        <div className="flex justify-center gap-1 items-center px-1 flex-none w-32 bg-white rounded-md text-tahiti">
            <ButtonCommon className={'rounded-md p-1  hover:bg-tahiti hover:text-white'} icon={<BiSearch className="text-3xl" />} fnHandler={() => {}}/>
            <ButtonCommon className={'rounded-md p-1 hover:bg-tahiti hover:text-white'} icon={<CgDarkMode className="text-3xl" />} fnHandler={() => {}}/>
            <ButtonCommon className={'rounded-md border border-white p-1  hover:bg-tahiti hover:text-black'} icon={<BsPerson className="text-3xl" />} fnHandler={() => {}}/>
        </div>
    </div>
  )
}

export default Navbar