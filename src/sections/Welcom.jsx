import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Galaxy from "../components/Galaxy";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import { Leva } from "leva";
import Pc from "../components/Pc";
import PcCamera from "../components/PcCamera";


const Welcom = () => {

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                Hi, I am Marouane <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Building Greate web applications</p>
            </div>
            <div className="w-full h-full absolute inset-0 ">

            <Canvas className="w-full h-full mt-50 ">
          
                <PerspectiveCamera makeDefault position={[0,0,10]}/>
                <ambientLight intensity={3} />
                <directionalLight position={[10, 10, 10]} intensity={0.5} />

                <Suspense fallback={<Loader />}>
                <Galaxy  position={[0,-20,-180]} rotation={[0, -Math.PI, 0]} />

                    <PcCamera isMobile={isMobile}>
                        <Pc scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0, 4.9, 0]} />
                    </PcCamera>


                </Suspense>
            </Canvas>
            
            </div>
        </section>
    )
}

export default Welcom;