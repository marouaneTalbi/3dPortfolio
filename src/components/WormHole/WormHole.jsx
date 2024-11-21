import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { Bloom, EffectComposer, LUT } from '@react-three/postprocessing'
import { LUTCubeLoader } from 'postprocessing'
import Scene from './RainbowScene'


const Wormehole = () => {
  const texture = useLoader(LUTCubeLoader, '/lut/F-6800-STD.cube')
  return (
    <>
      <Scene />
      <EffectComposer disableNormalPass>
        <Bloom mipmapBlur levels={1} intensity={1.5} luminanceThreshold={1} luminanceSmoothing={1} />
        <LUT lut={texture} />
      </EffectComposer>
    </>
  )
}

export default Wormehole;
