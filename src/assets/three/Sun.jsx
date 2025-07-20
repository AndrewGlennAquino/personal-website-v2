import { Canvas } from "@react-three/fiber";

const Sun = () => {
  return (
    <div>
      <Canvas camera={{position: [0, 0, 6.5]}}>
        <mesh>
          <sphereGeometry args={[4, 15, 15]} />
          <meshBasicMaterial color="white" wireframe />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Sun;