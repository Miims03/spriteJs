import React, { useState, useEffect } from 'react';
import { SpriteAnimator } from 'react-sprite-animator';
import oth from '../assets/purpleMan.png';
import axios from 'axios';

export default function Champ() {
  const [data, setData] = useState(null);
  const baseUrl = "http://localhost:3000";

  useEffect(() => {
    axios.get(`${baseUrl}/champ/find`)
      .then(response => {
        setData(response.data)
        console.log(data)
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div className='text-white flex flex-col justify-start items-center mt-10 w-full gap-10'>
      <div className='flex'>
        {data.map((champ, i) => (
          <div key={i} className='flex flex-col justify-start items-center'>
            <h1 className='text-2xl font-semibold'>{champ.name}</h1>
            <h2 className='text-lg font-base'>{champ.subname}</h2>
            <SpriteAnimator
              sprite={`http://localhost:3000/uploads/${champ.img}.png`}
              width={champ.width / champ.frames}
              height={80}
              scale={0.3}
              shouldAnimate={true}
              frameCount={champ.frames}
              fps={7}
            />
            <p>{champ.description}</p>
          </div>
        ))}
      </div>
      <h1>Fetched Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
