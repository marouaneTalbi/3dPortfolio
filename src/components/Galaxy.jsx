import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';


const Galaxy = (props) => {
  const { nodes, materials } = useGLTF('/models/need_some_space.glb');
  const pointsRef = useRef(null);

  // Rotation continue de la galaxie autour de son propre axe (axe Y)
  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.01; // Faire tourner la galaxie autour de son axe Y
    }
  });

  return (
    <group {...props} dispose={null} >
      <group name="Sketchfab_Scene" ref={pointsRef} >
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.4}  // Utilisation d'une échelle plus visible
          userData={{ name: 'Sketchfab_model' }}>
          <group name="Geode" userData={{ name: 'Geode' }}>
            <points
               // Référence pour appliquer la rotation sur la galaxie
              name="Object_2"
              geometry={nodes.Object_2.geometry}
              material={materials['Scene_-_Root']}
              userData={{ name: 'Object_2' }}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/need_some_space.glb')

export default Galaxy
