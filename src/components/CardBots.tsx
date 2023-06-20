import { DiAndroid } from 'react-icons/di'
import { MdScreenshot } from 'react-icons/md'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { BsPhoneFill } from 'react-icons/bs'
import { FcGallery } from 'react-icons/fc'
import { MdCallEnd } from 'react-icons/md'
import { FaFlagUsa, FaBatteryHalf } from 'react-icons/fa'
import { AiOutlineWifi, AiFillFolderOpen } from 'react-icons/ai'

const CardBots = () => {
    return (
        <div className='bg-gray-900/60 p-4 rounded-lg'>
            <div className='flex gap-2 items-center'>
                <DiAndroid size={50} className="text-green-500" />
                <div className='flex flex-col gap-1'>
                    <p className='text-green-500'>Hw-1097jdhdwhho</p>
                    <div className='flex items-center gap-2 text-white'>
                        <p className='w-3 h-3 s rounded-full bg-green-600'></p>
                        <p className=''>Online</p>
                        <p className='bg-green-500 px-2 rounded-md'>Test</p>
                    </div>
                </div>
            </div>

            {/* 2 */}
            <div className=' flex flex-col mt-10 relative after:w-[20%] after:h-[0.04rem] after:absolute after:bg-gray-600 after:left-0      before:w-[20%] before:h-[0.04rem] before:absolute before:bg-gray-600 before:right-0 text-gray-400 justify-center w-full items-center'>
                <p><span className='font-bold'>Last online:</span> 2023-02-22 14:47:59</p>
                <p><span className='font-bold'>Infected at:</span> 2023-02-22 14:47:59</p>
            </div>
            {/* 3 */}
            <div>
                <div className='flex gap-10 mt-10 items-center justify-center'>
                    <span className='block bg-gray-600 w-full h-[0.04rem]'></span>
                    <p className='text-center  text-gray-400'>Geolocation/IP</p>
                    <span className='block bg-gray-600 w-full h-[0.04rem]'></span>
                </div>
            </div>
            {/* 4 */}
            <ul className='flex flex-col mt-4 gap-5'>
                <li className='flex items-center gap-2 text-gray-500'>
                    <BsPhoneFill className="text-white" size={23} />
                    <p className='flex'>
                        <span>Model:</span>
                        <span>sumsung SM-A307FN</span>
                    </p>
                </li>
                <li className='flex items-center gap-2 text-gray-500'>
                    <MdScreenshot className="text-white" size={23} />
                    <p className='flex'>
                        <span>Screen size:</span>
                        <span>720*1423</span>
                    </p>
                </li>
                <li className='flex items-center gap-2 text-gray-500'>
                    <FaFlagUsa className="text-white" size={23} />
                    <p className='flex'>
                        <span>Country:</span>
                        <span>Iran</span>
                    </p>
                </li>
                <li className='flex items-center gap-2 text-gray-500'>
                    <AiOutlineWifi className="text-white" size={23} />
                    <p className='flex'>
                        <span>102.168.50.17</span>
                    </p>
                </li>
                <li className='flex items-center gap-2 text-gray-500'>
                    <FaBatteryHalf className="text-white" size={23} />
                    <p className='flex'>
                        <span>50%</span>
                    </p>
                </li>

            </ul>

            {/* 5 */}

            <div className='flex mt-10 gap-5 text-gray-700 justify-center h-[40px] items-center'>
                <div className='flex border border-dashed px-2 h-[40px] rounded-lg items-center'>
                    <AiFillFolderOpen />
                    <p>File manager</p>
                </div>
                <div className='border border-dashed h-full rounded-lg px-3 flex justify-center items-center'>
                    <p>Vnc</p>
                </div>
            </div>
            {/* 6 */}

            <div className='flex items-center gap-10'>
                <div className=' flex-1 w-full'>
                    <div className='flex gap-3 mt-10 items-center justify-center'>
                        <span className='block bg-gray-600 w-full h-[0.04rem]'></span>
                        <p className='text-center  text-gray-400'>Permissions</p>
                        <span className='block bg-gray-600 w-full h-[0.04rem]'></span>
                    </div>
                    <div className='flex mt-4 text-gray-600 justify-between items-center'>
                        <FcGallery size={22} />
                        <BiMessageSquareDetail size={22} />
                        <MdCallEnd size={22} />
                    </div>
                </div>
                <div className='flex-1 w-full'>
                    <div className='flex gap-3 mt-10 items-center justify-center'>
                        <span className='block bg-gray-600 w-full h-[0.04rem]'></span>
                        <p className='text-center  text-gray-400'>Info</p>
                        <span className='block bg-gray-600 w-full h-[0.04rem]'></span>
                    </div>
                    <div className='flex mt-4 text-gray-600 justify-between items-center'>
                        <FcGallery size={22} />
                        <BiMessageSquareDetail size={22} />
                        <MdCallEnd size={22} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardBots