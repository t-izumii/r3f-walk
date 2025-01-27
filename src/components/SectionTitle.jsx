import { Text3D } from "@react-three/drei";

export const SectionTitle = ({children, ...props}) => {
return (
    <>
    <Text3D font={"Inter_Bold.json"} fontSize={0.1} position-z={-2} rotation-y={ -Math.PI / 12} {...props}>
        {children}
        <meshStandardMaterial attach="material" color="white" />
    </Text3D>

    </>
);
}