import React from 'react'
import { SpriteAnimator } from 'react-sprite-animator'
import oth from '../assets/purpleMan.png'
export default function Calavera() {

    const name = 'calavera'

  return (
        <SpriteAnimator
        sprite={oth}
        width={140}
        height={80}
        scale={0.3}
        shouldAnimate={true}
        frameCount={9}
        fps={5}
      />
  )
}
