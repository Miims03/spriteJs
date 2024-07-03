import React from 'react'
import { SpriteAnimator } from 'react-sprite-animator'

export default function Calavera({img}) {

    const name = 'calavera'

  return (
        <SpriteAnimator
        sprite={img}
        width={80}
        height={50}
        scale={0.3}
        shouldAnimate={true}
        frameCount={9}
        fps={5}
      />
  )
}
