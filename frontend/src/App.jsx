import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "tailwindcss";
import Sidebar, { SidebarItem } from './components/Sidebar'
import {LifeBuoy,Receipt,Boxes,Package,UserCircle,BarChart3,LayoutDashboard, LineChartIcon} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Home, PieChart, Briefcase, Calendar, Settings} from "lucide-react";
import Header from './components/Header';
import { Container } from 'react-bootstrap' 
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap"
import ThemeSwitcher from './components/ThemeSwitcher';


function App() {

  return (
  <>
    <Header/>
    
    <Sidebar>
      
      <SidebarItem icon={<img 
      src="./images/Frame.jpg" 
      className="absolute w-[23px] h-[23px] object-cover" 
      
      alt="icon" 
    />} text='Dashboard'  />
      <SidebarItem icon={<Home size={20}/>} text='PropertyListings'/>
      <SidebarItem icon={<PieChart size={20}/>} text='Statistics'/>
      <SidebarItem icon={<Briefcase size={20}/>} text='Inventory'/>
      <SidebarItem icon={<Calendar size={20}/>} text='Portfolio' alert/>
      <SidebarItem icon={<Settings size={20}/>} text='Settings'/>

      
      </Sidebar> 
      <main className='py-3'>
      <Container>
        <Outlet/>
      </Container>
    </main>
  </>
  )
}

export default App
