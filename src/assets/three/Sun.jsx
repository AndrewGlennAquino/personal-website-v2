import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

/**
 * Animated Ray that takes rotation and animate as props
 * @param props rotation, animate
 */
const Ray = ({ rotation, animate = true }) => {
  // Store the current z offset for this ray
  const rayRef = useRef();

  // Mesh material constants
  const metalness = 0;
  const roughness = 1;
  const color = "#ff9500";

  /**
   * React Three Fiber hook that exectues every frame,
   * where the speed is based on the devices' display refresh rate.
   * Rotate the ray clockwise about the z-axis if animate is true.
   */
  useFrame(() => {
    if (animate) {
      rayRef.current.rotation.z -= 0.001;
    }
  });

  return (
    <group rotation={rotation} ref={rayRef}>
      {/* Middle ray */}
      <group>
        <mesh position={[0, 1, 0]}>
          <cylinderGeometry args={[0.15, 0.05, 0.75]} />
          <meshStandardMaterial
            color={color}
            metalness={metalness}
            roughness={roughness}
          />
        </mesh>

        <mesh position={[0, 1.5, 0]}>
          <coneGeometry args={[0.15, 0.25]} />
          <meshStandardMaterial
            color={color}
            metalness={metalness}
            roughness={roughness}
          />
        </mesh>
      </group>

      {/* Left ray */}
      <group>
        <mesh position={[-0.16, 0.92, 0]} rotation={[0, 0, 0.15]}>
          <cylinderGeometry args={[0.05, 0.025, 0.65]} />
          <meshStandardMaterial
            color={color}
            metalness={metalness}
            roughness={roughness}
          />
        </mesh>

        <mesh position={[-0.21, 1.25, 0]} rotation={[0, 0, 1.75]}>
          <coneGeometry args={[0.09, 0.09]} />
          <meshStandardMaterial
            color={color}
            metalness={metalness}
            roughness={roughness}
          />
        </mesh>
      </group>

      {/* Right ray */}
      <group>
        <mesh position={[0.16, 0.92, 0]} rotation={[0, 0, -0.15]}>
          <cylinderGeometry args={[0.05, 0.025, 0.65]} />
          <meshStandardMaterial
            color={color}
            metalness={metalness}
            roughness={roughness}
          />
        </mesh>

        <mesh position={[0.21, 1.25, 0]} rotation={[0, 0, -1.75]}>
          <coneGeometry args={[0.09, 0.09]} />
          <meshStandardMaterial
            color={color}
            metalness={metalness}
            roughness={roughness}
          />
        </mesh>
      </group>
    </group>
  );
};

/**
 * Wireframe globe component for Sun
 */
const Globe = () => {
  // Mesh material constants
  const metalness = 0;
  const roughness = 1;
  const color = "#ff9500";

  return (
    <mesh scale={[1.15, 1.15, 1.15]}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial
        color={color}
        metalness={metalness}
        roughness={roughness}
        wireframe
      />
    </mesh>
  );
};

/**
 * Sun component for hero with animation controls. Animation paused as default.
 * @param props animate
 */
const Sun = ({ animate = false }) => {
  return (
    <Canvas camera={{ position: [0, 0, 2.5] }}>
      <group>
        {/* Wireframe globe */}
        <Globe animate={animate} />

        {/* Sun rays, rotated on the z-axis by radians*/}
        <Ray rotation={[0, 0, 0]} animate={animate} />
        <Ray rotation={[0, 0, 0.785]} animate={animate} />
        <Ray rotation={[0, 0, 1.57]} animate={animate} />
        <Ray rotation={[0, 0, 2.355]} animate={animate} />
        <Ray rotation={[0, 0, 3.14]} animate={animate} />
        <Ray rotation={[0, 0, 3.925]} animate={animate} />
        <Ray rotation={[0, 0, 4.71]} animate={animate} />
        <Ray rotation={[0, 0, 5.495]} animate={animate} />
      </group>

      {/* Lighting */}
      <ambientLight color="#f5f5f5" intensity={5} />
    </Canvas>
  );
};

export default Sun;
