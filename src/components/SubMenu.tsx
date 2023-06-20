import { MdSmartphone } from "react-icons/md"
import { IoIosArrowDown } from "react-icons/io"
import { useState } from "react"
export const SubMenu = () => {
    const [show, setShow] = useState(false)
    return (
        <div className='w-full pt-2'>
            <button onClick={() => setShow(!show)} className='flex  items-center px-3 py-3 justify-between transition-all hover:bg-slate-700 w-full text-gray-500'>
                <div className='flex gap-1 w-full  items-center'>
                    <MdSmartphone className={`text-blue-400`} />
                    <span>Bots</span>
                </div>
                <IoIosArrowDown className={` transition-all duration-500 ${show ? "rotate-180" : ""}`} size={20} />
            </button>
            <ul className={`px-3 transition-all duration-500 flex flex-col gap-3 text-gray-500 text-[12px] pt-3 ${show ? "min-h-[160px] !h-[160px] max-h-[160px]" : "h-0 overflow-hidden"}`}>
                <li>
                    All bots
                </li>
                <li>
                    Favaurte
                </li>
                <li>
                    Online
                </li>
                <li>
                    Ofline
                </li>
                <li>
                    Uninstalled
                </li>
            </ul>
        </div>
    )
}
