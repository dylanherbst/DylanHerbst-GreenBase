import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PricingPage from './Pages/PricingPage'
import SideBar from './Components/SideBar'
import NavBar from './Components/NavBar'
import AppRoutes from './Routes/routes'
import { UserProvider } from './Context/UserContext'

function App() {
  

  return (
    <>
    <UserProvider>
    {/* <NavBar></NavBar> */}
 {/* <PricingPage></PricingPage> */}
 <AppRoutes></AppRoutes>
 {/* <SideBar></SideBar> */}
 </UserProvider>
    </>
  )
}

export default App
