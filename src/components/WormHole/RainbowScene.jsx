import { useRef, useCallback, useState } from 'react'
import { Rainbow } from './Rainbow'
import { Flare } from './Flare'

const Scene = () => {
    const flare = useRef(null)
    const ambient = useRef(null)
    const spot = useRef(null)
    const rainbow = useRef(null)

    return (
      <>
        {/* Lights */}
        <ambientLight ref={ambient} intensity={0} />
        <pointLight position={[10, -10, 0]} intensity={0.05} />
        <pointLight position={[0, 10, 0]} intensity={0.05} />
        <pointLight position={[-10, 0, 0]} intensity={0.05} />
        <spotLight ref={spot} intensity={1} distance={7} angle={1} penumbra={1} position={[0, 0, 1]} />
        {/* Rainbow and flares */}
        <Rainbow ref={rainbow} startRadius={0} endRadius={0.5} fade={0} />
        <Flare ref={flare} visible={true} renderOrder={20} scale={2.25} streak={[12.5, 20, 10]} />
      </>
    )
  }


export default Scene;
