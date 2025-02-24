import { Navbar } from '../Pages/Shared/Navbar/Navbar'
import { Outlet } from 'react-router'
import { Footer } from '../Pages/Shared/Footer/Footer'

export const RootLayout = () => {
  return (
    <div className='min-h-screen relative'>
      <div className='fixed inset-0 bg-[url("https://homeownersbenefit.nebs-it.com/wp-content/uploads/2024/05/solar-panels-roof-solar-cell-Copy-scaled.jpg")] bg-cover bg-center bg-no-repeat -z-20'></div>
      <div className="fixed inset-0 bg-black/65 -z-10"></div>
      <div className='relative z-10 flex flex-col min-h-screen  lg:max-w-[1280px] mx-auto p-3'>
        <Navbar/>
        <div className='flex-grow'>
          <Outlet/>
        </div>
        <Footer/>
      </div>
    </div>
  )
}
