import { useState } from 'react'
import { Routes, Route , Navigate } from "react-router-dom"
import NavBar from './components/NavBar'
import ChoiceChamp from './pages/ChoiceChamp'
import Tesst from './pages/test'
import Home from './pages/Home'
function App() {



  return (
    <main className='min-h-screen w-screen flex flex-col justify-start items-center bg-stone-800 overflow-hidden pt-10'>
      {/* <NavBar/> */}
      
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/champselect" element={ <ChoiceChamp />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </main>
  )
}

export default App
