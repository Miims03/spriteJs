import React from 'react'
import Calavera from '../components/Calavera'
import oth from '../assets/tile000.png'
import '../components/Calavera.jsx'
export default function () {
  return (
    <div className=''>
        <div className='flex flex-col justify-center items-center'>
            <h1>{name}</h1>
            <Calavera img={oth} />
        </div>
        
    </div>
  )
}
