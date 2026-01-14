import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HOME from './pages/HOME'
import Agyence from './pages/Agyence'
import Project from './pages/project'
import Navbar from './Components/Navgation/Navbar'
import FullScreenNav from './Components/Navgation/FullScreenNav'
import ContactPage from './pages/Contact1'


const App = () => {


  return (
    <div  className="text-white overflow-x-hidden ">
      <FullScreenNav />
      <Navbar />
      <Routes>
        <Route path="/" element={< HOME />} />
        <Route path="/Agyence" element={< Agyence />} />
        <Route path="/project" element={< Project />} /> 
        <Route path="/Contact" element={<ContactPage />} />
      </Routes> 
    </div>
  )
}

export default App
