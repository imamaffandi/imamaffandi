import { useRef, Suspense, useState } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

const Skull = () => {
  const skull = useGLTF("/skull/skull.gltf");
  const [animationStarted, setAnimationStarted] = useState(false);
  const skullMesh = useRef();
  const boxRef = useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    boxRef.current.rotation.x = a * -0.0001;
    if (animationStarted) {
      const scrollPosition = window.scrollY;
      skullMesh.current.position.z = scrollPosition * 0.001;
      skullMesh.current.position.x = scrollPosition * -0.01;
      skullMesh.current.rotation.y = scrollPosition * 0.001;
    }
  });

  useFrame(() => {
    const handleScroll = () => {
      setAnimationStarted(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <group ref={skullMesh}>
      <mesh ref={boxRef}>
        <ambientLight intensity={5} />
        <pointLight intensity={10} position={[2, 1, 2]} />
        <pointLight intensity={10} position={[4, 4, 6]} />
        <pointLight intensity={10} position={[3.5, 4, -6]} />
        <pointLight intensity={10} position={[3.5, -3.5, 6]} />

        <primitive
          object={skull.scene}
          scale={0.28}
          position={[0, -3.25, -1.5]}
        />
      </mesh>
    </group>
  );
};

function SkullScene() {
  return (
    <div className="fixed w-full h-screen hover:cursor-pointer">
      <Canvas
        frameloop="always"
        shadows
        camera={{ position: [20, 10, 3], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        size={[window.innerWidth, window.innerHeight]}
      >
        <Suspense fallback={<meshLoader />} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.001}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight />
        <Skull />
        <Preload />
      </Canvas>
    </div>
  );
}

export default SkullScene;
