import { useState } from 'react'
import NavBar from './components/NavBar'
import ChoiceChamp from './pages/ChoiceChamp'
function App() {



  return (
    <main className='h-screen w-screen flex flex-col justify-start items-center'>
      <NavBar/>
      <ChoiceChamp />
    </main>
  )
}

export default App
