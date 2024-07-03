import React from 'react'
import Champ from '../components/Champ'

export default function () {
  return (
    <div className='w-full'>
        <div className='flex flex-col justify-center items-center'>
            <h1>{name}</h1>
            <Champ />
        </div>
        
    </div>
  )
}
