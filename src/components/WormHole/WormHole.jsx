import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { Bloom, EffectComposer, LUT } from '@react-three/postprocessing'
import { LUTCubeLoader } from 'postprocessing'
import Scene from './RainbowScene'


// function Scene() {
//     const flare = useRef(null)
//     const ambient = useRef(null)
//     const spot = useRef(null)
//     const rainbow = useRef(null)

//     return (
//       <>
//         {/* Lights */}
//         <ambientLight ref={ambient} intensity={0} />
//         <pointLight position={[10, -10, 0]} intensity={0.05} />
//         <pointLight position={[0, 10, 0]} intensity={0.05} />
//         <pointLight position={[-10, 0, 0]} intensity={0.05} />
//         <spotLight ref={spot} intensity={1} distance={7} angle={1} penumbra={1} position={[0, 0, 1]} />
//         {/* Rainbow and flares */}
//         <Rainbow ref={rainbow} startRadius={0} endRadius={0.5} fade={0} />
//         <Flare ref={flare} visible={true} renderOrder={20} scale={2.25} streak={[12.5, 20, 10]} />
//       </>
//     )
//   }
  

const Wormehole = () => {
  const texture = useLoader(LUTCubeLoader, '/lut/F-6800-STD.cube')
  return (
    <>
      {/* <color attach="background" args={['black']} /> */}
      <Scene />
      <EffectComposer disableNormalPass>
        <Bloom mipmapBlur levels={9} intensity={2.5} luminanceThreshold={1} luminanceSmoothing={1} />
        <LUT lut={texture} />
      </EffectComposer>
    </>
  )
}

export default Wormehole;
