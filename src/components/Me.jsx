import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useGraph } from '@react-three/fiber'
import { useGLTF, useFBX, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

const Me = ({ animationName = 'stand', ...props }) => {
  const group = useRef()
  const { scene } = useGLTF('/models/me/me.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)

  const { animations: flyAnimation } = useFBX('/models/animations/flying.fbx')
  const { animations: idleAnimation } = useFBX('/models/animations/idle.fbx')
  const { animations: saluteAnimation } = useFBX('/models/animations/salute.fbx')
  const { animations: fallingAnimation } = useFBX('/models/animations/Falling.fbx')
  const { animations: standingAnimation } = useFBX('/models/animations/Standing.fbx')
  const { animations: clappingAnimation } = useFBX('/models/animations/clapping.fbx')
  const { animations: victoryAnimation } = useFBX('/models/animations/victory.fbx')

    saluteAnimation[0].name = 'salute'
    standingAnimation[0].name = 'stand'
    fallingAnimation[0].name = 'fall'
    flyAnimation[0].name = 'fly'
    idleAnimation[0].name = 'idle'
    clappingAnimation[0].name = 'clapping'
    victoryAnimation[0].name = 'victory'

  const  {actions, }  = useAnimations(
    [flyAnimation[0], saluteAnimation[0], idleAnimation[0], clappingAnimation[0], standingAnimation[0], fallingAnimation[0]],
    group
  )

  useEffect(() => {


    if (actions) {
    actions[animationName].reset().fadeIn(0.5).play()

    }
    return () => {
      if (actions) {
        actions[animationName].fadeOut(0.5)
      }
    }
  }, [animationName, actions])

    return (
        <group {...props} dispose={null} ref={group}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Beard"
          geometry={nodes.Wolf3D_Beard.geometry}
          material={materials.Wolf3D_Beard}
          skeleton={nodes.Wolf3D_Beard.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Glasses.geometry}
          material={materials.Wolf3D_Glasses}
          skeleton={nodes.Wolf3D_Glasses.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
      </group>
    )
  }
  
  
  useGLTF.preload('/models/me/me.glb')


export default Me