import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer'
import Home from './Pages/Home'
import Appointment from './Pages/Appointment'
import Shop from './Pages/Shop'


const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/docmeds" element={<Home/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/shop" element={<Shop/>}/>       
      </Routes>
      <Footer/>
    </>
  )
}

export default App
