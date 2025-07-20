import { Canvas } from "@react-three/fiber";

/**
 * Animated wireframe sun component for hero
 */
const Sun = () => {
  return (
    <div>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <group position={[0, -4, 0]}>
          {/* Wireframe sphere */}
          <mesh>
            <sphereGeometry args={[2, 8, 8]} />
            <meshBasicMaterial color="#f5f5f5" wireframe />
          </mesh>

          {/* Top ray */}
          <group position={[0, 6.5, 0]}>
            <mesh position={[0, -3, 0]}>
              <cylinderGeometry args={[0.75, 0.25, 3, 8, 8]} />
              <meshBasicMaterial color="#f5f5f5" />
            </mesh>

            <mesh position={[0, -1, 0]}>
              <coneGeometry args={[0.75, 1, 8, 8]} />
              <meshBasicMaterial color="#f5f5f5" />
            </mesh>
          </group>
        </group>
      </Canvas>
    </div>
  );
};

export default Sun;
