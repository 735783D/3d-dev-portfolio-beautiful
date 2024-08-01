import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ isMobile }) => {
  const ball = useGLTF("./tech_ico/tech_ico.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='white' />
      <pointLight 
        position={[20, 0, 0]} 
        intensity={1} />
      <pointLight 
        position={[-20, 0, 0]} 
        intensity={1} />
      <pointLight 
        position={[0, 20, 0]} 
        intensity={1} />                
      <pointLight 
        position={[0, -20, 0]} 
        intensity={1} />
      <pointLight 
        position={[0, 0, 20]} 
        intensity={1} />
      <pointLight 
        position={[0, 0, -20]} 
        intensity={1} />                        
      <primitive
        object={ball.scene}
        scale={isMobile ? 5 : 10}
        rotation={[0,0,0]}
      />
    </mesh>
  );
};


const BallCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, -30], fov: 100, zoom: 4 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
        />

        <Ball isMobile={isMobile} />  
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;