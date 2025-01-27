import { useGLTF } from "@react-three/drei";

export const Mounten = () => {
    const model = useGLTF('/models/mounten.gltf');

    return (
        <primitive object={model} />

    );
};
useGLTF.preload('/models/mounten.gltf');