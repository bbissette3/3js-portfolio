import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/b-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials["Scene_-_Root"]}
        rotation={[0.026, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/b-transformed.glb");
