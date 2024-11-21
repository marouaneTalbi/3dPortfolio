import { Center, OrbitControls, PerspectiveCamera, Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Galaxy from "../components/Galaxy";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import { Leva } from "leva";
import Pc from "../components/Pc";
import PcCamera from "../components/PcCamera";
import Me from "../components/Me";
import Wormehole from "../components/WormHole/WormHole";
import { Rainbow } from "../components/WormHole/Rainbow";


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
                    {/*<Center top bottom position={[0, 2, 0]}>
                        <Text3D size={0.7} letterSpacing={-0.05} height={0.05} font="/fonts/Inter_Bold.json">
                        Hi I am Marouane
                            <meshStandardMaterial color="white" />
                        </Text3D>
                    </Center> */}
                    <PerspectiveCamera makeDefault position={[0,0,10]}/>
                    <ambientLight intensity={3} />
                    <directionalLight position={[10, 10, 10]} intensity={4.5} />
                    <Suspense fallback={<Loader />}>
                        {/* <PcCamera isMobile={isMobile}>
                            <Pc scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0, 4.9, 0]} />
                        </PcCamera> */}
                        {/* <Galaxy scale={0.4}  position={[0,-100,-180]} rotation={[0, -Math.PI, 0]} />  */}
                        {/* <OrbitControls enableZoom  /> */}
                        {/* <OrbitControls enableZoom maxPolarAngle={Math.PI/2}  /> */}
                        {/* <Wormehole /> */}
                    </Suspense>
                    <Me position-y={-4} scale={1.5} rotation={[10.5, -12.5, 0.5]} />

                </Canvas>
            </div>
  
        </section>
    )
}

export default Welcom;