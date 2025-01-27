import { Canvas } from "@react-three/fiber";
import { useGLTF , OrbitControls , Environment, ContactShadows } from "@react-three/drei";
import Experience from "./components/Experience";
import { ScrollControls , Scroll } from "@react-three/drei";
import config from './config';
import { MotionConfig } from "framer-motion";
import { Interface } from "./components/Interface";

function App() {

  return (
    <Canvas camera={{
        position: [0, 0.5, 5],
        fov: 60,
      }}>
      <color attach="background" args={["#f5f3ee"]} />
      <fog attach={"fog"} args={["#f5f3ee", 1, 100]} />
      {/* <OrbitControls/> */}
      <ScrollControls pages={config.sections.length} damping={0.1} maxSpeed={0.2}>
        <MotionConfig transition={{
          duration: 1,
        }}>
          <group position-y={-1}>
            <Experience />
            <Environment preset="city" />
          </group>
        </MotionConfig>
        <Scroll html>
          <MotionConfig transition={{
            duration: 1,
          }}>
            <Interface />
          </MotionConfig>
        </Scroll>
      </ScrollControls>

    </Canvas>
  );
}

export default App;