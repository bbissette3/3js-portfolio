import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const B = () => {
  const letter_b = useGLTF("./letter_b/scene.gltf");

  return (
    <primitive
      object={letter_b.scene}
      scale={0.06}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
};

const LetterBCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.9}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <B />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default LetterBCanvas;
