import React, { useState, useEffect } from 'react'
import { SpriteAnimator } from 'react-sprite-animator'
import axios from 'axios'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HpBar from './HpBar';

export default function Champ() {
  const [mainChamp, setMainChamp] = useState(null)
  const [data, setData] = useState(null)
  const [datafull, setDatafull] = useState([])
  const baseUrl = "http://localhost:3000"
  const [champId, setChampId] = useState(1)
  const [description, setDescription] = useState(false)
  const [transition, setTransition] = useState(false)
  const [transitionName, setTransitionName] = useState('animate-slideInRight')
  const [isAtk, setIsAtk] = useState(false)

 
  const [maxHp , setMaxHp] = useState(0)
  const [currentHp, setCurrentHp] = useState(0);
  

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
  useEffect(() => {
    if(mainChamp){
      setMaxHp(mainChamp.hpmax);
      setCurrentHp(mainChamp.hpmax); 
  }
  }, [mainChamp])

  if(mainChamp){
  if(currentHp < 0){
    setCurrentHp(0);
  }
  if(currentHp > mainChamp.hpmax){
    setCurrentHp(mainChamp.hpmax);
  }
}
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
  const selectMainChamp = () => {
      setMainChamp(data)
  }
  const handleAtk = () => {
    setIsAtk(!isAtk)
    console.log(isAtk)
  }

  return (
    <div className='text-white flex flex-col justify-start items-center mt-1 w-full gap-10'>

      <h1 className='text-3xl font-semibold'>Champ Select</h1>
      <div className='flex'>
        <div className='h-[5rem] w-[5rem]  cursor-pointer z-10 flex items-center justify-center mt-[10rem]' onClick={handleLeft}><ArrowBackIosIcon fontSize='large' /></div>
        {!data ?
          <div className='rounded-full border-t-4 w-[10rem] h-[10rem] border-stone-400 mt-10 animate-spin'></div>
          :
          <div className='flex justify-center items-center gap-5'>

            <div className='flex flex-col justify-start items-center w-[25rem] min-h-[40rem] overflow-hidden '>
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
                fps={data.fps}
              />
              <p className={`text-center cursor-pointer w-[25rem] ${!description ? 'line-clamp-3' : ''}`} onClick={descriptionok}>{data.description}</p>
              <button className='mt-10 text-2xl border-2 py-2 px-20' onClick={selectMainChamp}>Select</button>
              {mainChamp && (
                
                <div className='flex flex-col justify-center items-center w-44 mt-10'>
                  <HpBar currentHp={currentHp} maxHp={maxHp} />
                  {isAtk ? 
                  <SpriteAnimator
                    className={``}
                    sprite={`http://localhost:3000/uploads/${mainChamp.imgatk}.png`}
                    width={mainChamp.widthatk / mainChamp.framesatk}
                    height={80}
                    scale={mainChamp.scale}
                    shouldAnimate={true}
                    frameCount={mainChamp.framesatk}
                    fps={mainChamp.fpsatk}
                  />  
                  :
                  <SpriteAnimator
                    className={``}
                    sprite={ `http://localhost:3000/uploads/${mainChamp.img}.png`}
                    width={ mainChamp.width / mainChamp.frames }
                    height={80}
                    scale={mainChamp.scale}
                    shouldAnimate={true}
                    frameCount={mainChamp.frames}
                    fps={mainChamp.fps}
                  />
                }
                  <button onClick={handleAtk}>Attaquer</button>
                  <button onClick={() => setCurrentHp(currentHp - 10)}>Prendre des dégâts</button>
                  <button onClick={() => setCurrentHp(currentHp + 10)}>Récupérer des points</button>
                </div>
              )
              }
            </div>
          </div>
        }
        <div className='h-[5rem] w-[5rem] cursor-pointer z-10 flex justify-center items-center text-5xl mt-[10rem]' onClick={handleRight}><ArrowForwardIosIcon fontSize='large' /></div>
      </div>
    </div>
  )
}
