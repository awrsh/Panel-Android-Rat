
import CardBots from './components/CardBots';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Pagination from '@mui/material/Pagination';


function App() {

  return (

    <>
      <Header />
      <div className='flex '>
        <Sidebar />
        <div className='flex-1  mt-10  overflow-auto pb-10'>
          <div className='!w-[90%] mx-auto'>

          <h1 className='font-bold text-gray-400 text-2xl'>Bots</h1>
          <div className='mt-10'>
            <Pagination className='z-10' count={1} variant="outlined" color='standard' shape="rounded" />
            <div className='grid grid-cols-2 mt-10 gap-10'>
              <CardBots />
              <CardBots />
            </div>

          </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
