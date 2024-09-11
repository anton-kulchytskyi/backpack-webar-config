/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF, useTexture } from '@react-three/drei';

import { textile, bodyColors, metalColors } from '../../utils/data';

export const Backpack = ({
  selectedMaterial,
  selectedBodyColor,
  selectedMetallColor,
}) => {
  const { nodes } = useGLTF('backpack/backpack.glb');
  const textures = useTexture([
    'backpack/denim_baseColor.jpg',
    'backpack/denim_normal.jpg',
    'backpack/denim_occlusionRoughnessMetallic.jpg',
    'backpack/fabric_baseColor.jpg',
    'backpack/fabric_normal.jpg',
    'backpack/fabric_occlusionRoughnessMetallic.jpg',
    'backpack/leather_baseColor.jpg',
    'backpack/leather_normal.jpg',
    'backpack/leather_occlusionRoughnessMetallic.jpg',
  ]);

  const [metallMap, metallNormalMap, metallRoughnessMap] = useTexture([
    'backpack/metall_baseColor.jpg',
    'backpack/metall_normal.jpg',
    'backpack/metall_occlusionRoughnessMetallic.jpg',
  ]);

  const [strapMap, strapNormalMap, strapRoughnessMap] = useTexture([
    'backpack/strap_baseColor.jpg',
    'backpack/strap_normal.jpg',
    'backpack/strap_occlusionRoughnessMetallic.jpg',
  ]);

  const texturesPerBackpack = textile.length;

  return (
    <group dispose={null}>
      <group
        position={[0, -2, 0]}
        scale={0.01}
      >
        <mesh geometry={nodes.Mesh.geometry}>
          <meshStandardMaterial
            map={textures[selectedMaterial * texturesPerBackpack]}
            normalMap={textures[selectedMaterial * texturesPerBackpack + 1]}
            roughnessMap={textures[selectedMaterial * texturesPerBackpack + 2]}
            color={bodyColors[selectedBodyColor].hex}
          />
        </mesh>

        <mesh geometry={nodes.Mesh_1.geometry}>
          <meshStandardMaterial
            map={metallMap}
            normalMap={metallNormalMap}
            roughnessMap={metallRoughnessMap}
            color={metalColors[selectedMetallColor].hex}
          />
        </mesh>
        <mesh geometry={nodes.Mesh_2.geometry}>
          <meshStandardMaterial
            map={strapMap}
            normalMap={strapNormalMap}
            roughnessMap={strapRoughnessMap}
          />
        </mesh>
      </group>
    </group>
  );
};

export default Backpack;
