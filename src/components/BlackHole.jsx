import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/black_hole.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, -0.375, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.black_hole_black_hole_blackoutside_0.geometry}
              material={materials.black_hole_blackoutside}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.black_hole_black_hole_blackoutside_0_1.geometry}
              material={materials.black_hole_blackoutside}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.black_hole_black_hole_blackoutside_0_2.geometry}
              material={materials.black_hole_blackoutside}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.black_hole_black_hole_light3_0.geometry}
              material={materials.black_hole_light3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.black_hole_black_hole_light2_0.geometry}
              material={materials.black_hole_light2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.black_hole_black_hole_light1_0.geometry}
              material={materials.black_hole_light1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.black_hole_black_hole_distortion_0.geometry}
              material={materials.black_hole_distortion}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.black_hole_black_hole_center_0.geometry}
              material={materials.black_hole_center}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.black_hole_ring_ring_0.geometry}
              material={materials.ring}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.black_hole_ring_ring2_0.geometry}
              material={materials.ring2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.black_hole_ring_ring2_0_1.geometry}
              material={materials.ring2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.black_hole_ring_ring2_0_2.geometry}
              material={materials.ring2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.black_hole_ring_ring2_0_3.geometry}
              material={materials.ring2}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Planet_Planet_0.geometry}
            material={materials.Planet}
            position={[30802.896, 2286.717, 136477.797]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/black_hole.glb')