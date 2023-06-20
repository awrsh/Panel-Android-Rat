import Logo from "../assets/images/logo.png"
import { MdSmartphone } from "react-icons/md"
import {FaUserCheck} from "react-icons/fa"
import {IoIosMore} from "react-icons/io"
const Header = () => {
    return (
        <div className='bg-gray-800 sticky top-0 z-[9999]'>
            <header className='flex justify-between py-2 items-center w-[95%] mx-auto'>
                <div className='flex items-center gap-20'>
                    <img className='w-32 h-10' src={Logo} />
                    <div className='flex flex-col gap-4 items-center'>
                        <div className='flex gap-10 items-center'>
                            <div className='w-24 h-[0.01rem] bg-gray-600'></div>
                            <span className='text-gray-600'>bots statistic</span>
                            <div className='w-24 h-[0.01rem] bg-gray-600'></div>
                        </div>
                        <div className='flex gap-6'>
                            <div className='flex items-center gap-1 text-green-400'>
                                <MdSmartphone />
                                <span>4</span>
                                <span>online</span>
                            </div>
                            <div className='flex items-center gap-1 text-orange-400'>
                                <MdSmartphone />

                                <span>4</span>
                                <span>ofline</span>
                            </div>
                            <div className='flex items-center gap-1 text-blue-400'>
                                <MdSmartphone />

                                <span>4</span>
                                <span>+8 new</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 items-center text-gray-400 cursor-pointer border h-[40px] px-3 border-gray-500 rounded-[6px]'>
                    <FaUserCheck size={20}/>
                    <p className='flex flex-col text-center text-[12px]'>
                        <span>BuildTester</span>
                        <span>Admin</span>
                    </p>
                    <div className='border-l border-gray-500 flex justify-center items-center pl-2 h-full'>
                        <IoIosMore/>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header