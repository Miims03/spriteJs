import React, { useState, useEffect } from 'react'
import { SpriteAnimator } from 'react-sprite-animator'
import axios from 'axios'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Champ() {
  const [mainChamp , setMainChamp] = useState(null)
  const [data, setData] = useState(null)
  const [datafull, setDatafull] = useState([])
  const baseUrl = "http://localhost:3000"
  const [champId, setChampId] = useState(1)
  const [description, setDescription] = useState(false)
  const [transition, setTransition] = useState(false)
  const [transitionName, setTransitionName] = useState('animate-slideInRight')

  useEffect(() => {
    axios.get(`${baseUrl}/champ/find/${champId}`)
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error)
      })
  }, [champId])

  useEffect(() => {
    axios.get(`${baseUrl}/champ/find`)
      .then(response => {
        setDatafull(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error)
      })
  }, [])

  const handleLeft = () => {
    if (champId > 1) {
      setTransition(true)
      setTransitionName('animate-slideOutRight')
      setTimeout(() => {
        setChampId(champId - 1)
        setTransitionName('animate-slideInLeft')
        setTransition(false)
      }, 500);
    } else {
      setTransition(true)
      setTransitionName('animate-slideOutRight')
      setTimeout(() => {
        setChampId(datafull.length)
        setTransitionName('animate-slideInLeft')
        setTransition(false)
      }, 500);
      
    }
  }

  const handleRight = () => {
    if (champId < datafull.length) {
      setTransition(true)
      setTransitionName('animate-slideOutLeft')
      setTimeout(() => {
        setChampId(champId + 1)
        setTransitionName('animate-slideInRight')
        setTransition(false)
      }, 500);
      
    } else {
      setTransition(true)
      setTransitionName('animate-slideOutLeft')
      setTimeout(() => {
        setChampId(1)
        setTransitionName('animate-slideInRight')
        setTransition(false)
      }, 500);
    }
  }

  const descriptionok = () => {
    setDescription(!description)
  }

  return (
    <div className='text-white flex flex-col justify-start items-center mt-10 w-full gap-10'>
      <h1 className='text-3xl font-semibold'>Champ Select</h1>
      {!data ? 
        <div className='rounded-full border-t-4 w-[10rem] h-[10rem] border-stone-400 mt-10 animate-spin'></div> 
        : 
        <div className='flex justify-center items-center gap-5'>
          <div className='h-[5rem] w-[5rem]  cursor-pointer z-10 flex items-center justify-center' onClick={handleLeft}><ArrowBackIosIcon fontSize='large'/></div>
          <div className='flex flex-col justify-start items-center w-[25rem] h-[30rem] overflow-hidden'>
            <h1 className='text-2xl font-semibold'>{data.name}</h1>
            <h2 className='text-lg font-base'>{data.subname}</h2>
            <SpriteAnimator
              className={` ${transition ? transitionName : transitionName} mt-5`}
              sprite={`http://localhost:3000/uploads/${data.img}.png`}
              width={data.width / data.frames}
              height={80}
              scale={data.scale}
              shouldAnimate={true}
              frameCount={data.frames}
              fps={7}
            />
            <p className={`text-center cursor-pointer ${!description ? 'line-clamp-3' : '' }`} onClick={descriptionok}>{data.description}</p>
          </div>
          <div className='h-[5rem] w-[5rem] cursor-pointer z-10 flex justify-center items-center text-5xl' onClick={handleRight}><ArrowForwardIosIcon fontSize='large'/></div>
        </div>
      }
    </div>
  )
}
