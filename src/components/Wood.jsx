import { useGLTF } from "@react-three/drei";

export const Wood = () => {
    const model = useGLTF('/models/wood.gltf');

    return (
        <primitive object={model} />
    );
};
useGLTF.preload('/models/wood.gltf');