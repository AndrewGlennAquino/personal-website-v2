import { Canvas } from "@react-three/fiber";

/**
 * Sun ray that takes position, rotation, and color as props
 * @param props position, rotation, color
 */
const Ray = ({ position, rotation, color }) => {
  return (
    <group position={position} rotation={rotation}>
      {/* Middle ray */}
      <group>
        <mesh position={[0, 1, 0]}>
          <cylinderGeometry args={[0.15, 0.05, 0.75]} />
          <meshBasicMaterial color={color} />
        </mesh>

        <mesh position={[0, 1.5, 0]}>
          <coneGeometry args={[0.15, 0.25]} />
          <meshBasicMaterial color={color} />
        </mesh>
      </group>

      {/* Left ray */}
      <group>
        <mesh position={[-0.16, 0.92, 0]} rotation={[0, 0, 0.15]}>
          <cylinderGeometry args={[0.05, 0.025, 0.65]} />
          <meshBasicMaterial color={color} />
        </mesh>

        <mesh position={[-0.21, 1.25, 0]} rotation={[0, 0, 1.75]}>
          <coneGeometry args={[0.09, 0.09]} />
          <meshBasicMaterial color={color} />
        </mesh>
      </group>

      {/* Right ray */}
      <group>
        <mesh position={[0.16, 0.92, 0]} rotation={[0, 0, -0.15]}>
          <cylinderGeometry args={[0.05, 0.025, 0.65]} />
          <meshBasicMaterial color={color} />
        </mesh>

        <mesh position={[0.21, 1.25, 0]} rotation={[0, 0, -1.75]}>
          <coneGeometry args={[0.09, 0.09]} />
          <meshBasicMaterial color={color} />
        </mesh>
      </group>
    </group>
  );
};

/**
 * Animated wireframe sun component for hero
 */
const Sun = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 3] }}>
        {/* Wireframe sphere and rays group */}
        <group scale={[0.7, 0.7, 0.7]}>
          {/* Wireframe sphere mesh */}
          <mesh scale={[1.15, 1.15, 1.15]}>
            <sphereGeometry args={[0.5, 8, 8]} />
            <meshBasicMaterial color="#6320ee" wireframe />
          </mesh>

          {/* Sun rays */}
          <Ray color="#6320ee" />
          <Ray position={[0, 0, 0]} rotation={[0, 0, -0.85]} color="#6320ee" />
          <Ray position={[0, 0, 0]} rotation={[0, 0, -1.55]} color="#6320ee" />
          <Ray position={[0, 0, 0]} rotation={[0, 0, -2.35]} color="#6320ee" />
          <Ray position={[0, 0, 0]} rotation={[0, 0, -3.15]} color="#6320ee" />
          <Ray position={[0, 0, 0]} rotation={[0, 0, -3.95]} color="#6320ee" />
          <Ray position={[0, 0, 0]} rotation={[0, 0, -4.75]} color="#6320ee" />
          <Ray position={[0, 0, 0]} rotation={[0, 0, -5.55]} color="#6320ee" />
        </group>
      </Canvas>
    </div>
  );
};

export default Sun;
