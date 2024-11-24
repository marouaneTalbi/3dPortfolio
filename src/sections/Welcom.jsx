import { Center, OrbitControls, PerspectiveCamera, Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Galaxy from "../components/Galaxy";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Pc from "../components/Pc";
import PcCamera from "../components/PcCamera";
import Me from "../components/Me";
import Wormehole from "../components/WormHole/WormHole";


const Welcom = () => {

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className="min-h-screen w-full flex flex-col relative " id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-50">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                Hi, I am Marouane <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Développeur Full-Stack</p>
            </div>
            <div className="w-full h-full absolute inset-0 ">
                <Canvas className="w-full h-full mt-50 ">
                    <PerspectiveCamera makeDefault position={[0,0,10]}/>
                    <ambientLight intensity={3} />
                    <directionalLight position={[10, 10, 10]} intensity={4.5} />
                    <OrbitControls  /> 
                    <Suspense fallback={<Loader />}>
                        {/* <Galaxy scale={0.4}  position={[0,-100,-180]} rotation={[0, -Math.PI, 0]} />  */}
                        {/* <Wormehole />
                        <PcCamera isMobile={isMobile}>
                            {
                                isMobile ?
                            <Me position={[-0.5,-3.7,1.5]} scale={1.1} rotation={[-5.4, 3.4, 1.]} />
                            :
                            <Me position={[5.6,-3.5,1.6]} scale={1.4} rotation={[-5.4, 3.5, 1]} />
                            }
                        </PcCamera> */}
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

export default Welcom;