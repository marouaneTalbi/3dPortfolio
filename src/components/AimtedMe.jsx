import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/three"; // Assurez-vous que l'importation est correcte
import Me from "./Me";

const AnimatedMe = () => {
  const [started, setStarted] = useState(false);
  const [animation, setAnimation] = useState('fall')

  // Animation de la position et de la rotation
  const { position, rotation } = useSpring({
    from: { position: [0,5, 0], rotation: [-1.5, 0, 0.5] },  // Position initiale
    to: { position: [0, -2.5, 1], rotation: [0, 0, 0] },          // Position finale
    config: { tension: 40, friction: 10 },  // Configuration de l'animation
    reset: true,
    onRest: () => {
      // Quand l'animation est terminée, changer l'état 'started' à true
      if (!started) {
        setStarted(true);
        console.log()
        setAnimation('idle')
      }
    },
  });

  return (
    <animated.group position={position} rotation={rotation}>
      <Me  position={[-0.5,0,0]} scale={2.} rotation={animation === 'fall' ? [-1.5,0, 0.5] : [0,0,0]} animationName={animation}/> {/* Assure-toi que 'Me' est bien défini */}
    </animated.group>
  ); 
};

export default AnimatedMe;
