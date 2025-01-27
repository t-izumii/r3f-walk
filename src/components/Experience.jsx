import { ContactShadows, useGLTF, Text, Billboard, Text3D, useScroll, Html } from "@react-three/drei";
import * as THREE from "three";
import { Avatar } from "./Avatar";
import { useRef , useState } from "react";
import { SectionTitle } from "./SectionTitle";
import { useFrame } from "@react-three/fiber";
import config from "../config";
import { motion } from "framer-motion-3d";


import { Mounten } from "./Mounten";
import { Wood } from "./Wood";

const SECTIONS_DISTANCE = 10;

export default function Experience() {

  const [ section, setSection ] = useState(config.sections[0]);

  const sectionContainer = useRef();
  const scrollData = useScroll();

  useFrame(() => {
    sectionContainer.current.position.z = -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1);

    setSection(config.sections[Math.round(scrollData.offset * (scrollData.pages - 1))]);
  });

  return (

    <>
      <Avatar />
      <ContactShadows opacity={0.5} scale={[30,30]} color="#9c8e66" />
      <mesh position-y={-0.001} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#fff" />
      </mesh>
      <motion.group ref={sectionContainer} animate={section}>
        <motion.group position-y={-5} variants={{
          home : {
            y: 0,
          }
        }}>
          <SectionTitle position-x={0.5}>
            HOME
          </SectionTitle>
        </motion.group>
        <motion.group position-z={ SECTIONS_DISTANCE } position-y={-5} variants={{
          about : {
            y: 0,
          }
        }}>
          <SectionTitle position-x={0.5}>
            ABOUT
          </SectionTitle>
        </motion.group>
        <motion.group position-z={ 2 * SECTIONS_DISTANCE } position-y={-5} variants={{
          projects : {
            y: 0,
          }
        }}>
          <SectionTitle position-x={0.5}>
            PROJECT
          </SectionTitle>
        </motion.group>
        <motion.group position-z={ 3 * SECTIONS_DISTANCE } position-y={-5} variants={{
          contact : {
            y: 0,
          }
        }}>
          <SectionTitle position-x={0.5}>
            CONTACT
          </SectionTitle>
        </motion.group>
      </motion.group>
    </>
  );
}