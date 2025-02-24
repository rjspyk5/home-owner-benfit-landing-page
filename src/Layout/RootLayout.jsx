import { Navbar } from '../Pages/Shared/Navbar/Navbar'
import { Outlet } from 'react-router'
import { Footer } from '../Pages/Shared/Footer/Footer'

export const RootLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
