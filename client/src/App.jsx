import { useState } from 'react'
import NavBar from './components/NavBar'
import ChoiceChamp from './pages/ChoiceChamp'
import Tesst from './pages/test'
function App() {



  return (
    <main className='min-h-screen w-screen flex flex-col justify-start items-center bg-stone-800 overflow-hidden pt-10'>
      {/* <NavBar/> */}
      <ChoiceChamp />
      {/* <Tesst /> */}
    </main>
  )
}

export default App
