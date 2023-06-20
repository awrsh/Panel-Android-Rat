import { SubMenu } from './SubMenu'
import { menuItems, menuItemsTwo } from '../helpers/utils/data'

const Sidebar = () => {
    return (
        <div className='w-[260px]'>
            <div className='fixed w-[260px] pb-32 overflow-auto  h-screen bg-gray-900'>
                <SubMenu />
                <div className=' mt-5 flex flex-col'>
                    {
                        menuItems.map((item, i) => (
                            <div className='flex items-center cursor-pointer gap-3 px-3 py-3 hover:bg-gray-800' key={i}>
                                <item.icon size={i === 0 ? 18 : i === 2 ? 22 : i === 5 || i === 6 ? 24 : 19} className={`${i === 0 ? "text-green-500" : i === 1 ? "text-fuchsia-700" : i === 2 ? "text-red-500" : i === 3 ? "text-green-400" : i === 4 ? "text-green-400" : i === 5 ? "text-fuchsia-900" : "text-yellow-300"}`} />
                                <span className='text-gray-500'>{item.name}</span>
                            </div>
                        ))
                    }
                </div>
                {/* line */}
                <div className='w-[95%] mx-auto h-[1px] bg-gray-700  mt-6 '></div>
                <div className='mt-5'>
                    {
                        menuItemsTwo.map((item, i) => (
                            <div className='flex items-center cursor-pointer gap-3 px-3 py-3 hover:bg-gray-800' key={i}>
                                <item.icon size={i === 0 ? 18 : i === 2 ? 22 : i === 5 || i === 6 ? 24 : 19} className={`${i === 0 ? "text-green-400" : i === 1 ? "text-blue-400" : i === 2 ? "text-fuchsia-700" : i === 3 ? "text-yellow-300" : null}`} />
                                <span className='text-gray-500'>{item.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar