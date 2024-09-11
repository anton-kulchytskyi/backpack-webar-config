/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  useGLTF,
  useTexture,
  OrbitControls,
  Environment,
} from '@react-three/drei';
import './App.css';
import Button from './Components/Button/Button';
import VRlogo from './Components/VRlogo/VRlgo';
// import {ReactComponent as Logo} from '../src/assets/vr_logo.svg';

const textile = ['denim', 'fabric', 'leather'];
const bodyColors = [
  { name: 'brown', hex: '#8B4512' },
  { name: 'black', hex: '#1A1A1A' },
  { name: 'blue', hex: '#104D97' },
];
const metalColors = [
  { name: 'silver', hex: '#c0c0c0' },
  { name: 'gold', hex: '#FFD700' },
  { name: 'black', hex: '#1A1A1A' },
];

function Backpack({
  selectedMaterial,
  selectedBodyColor,
  selectedMetallColor,
}) {
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

        <mesh
          geometry={nodes.Mesh_1.geometry}
          // material={materials.metall}
        >
          <meshStandardMaterial
            map={metallMap}
            normalMap={metallNormalMap}
            roughnessMap={metallRoughnessMap}
            color={metalColors[selectedMetallColor].hex}
          />
        </mesh>
        <mesh
          geometry={nodes.Mesh_2.geometry}
          // material={materials.strap}
        >
          <meshStandardMaterial
            map={strapMap}
            normalMap={strapNormalMap}
            roughnessMap={strapRoughnessMap}
            // color={metalColors[selectedMetallColor].hex}
          />
        </mesh>
      </group>
    </group>
  );
}

function App() {
  const [selectedMaterial, setSelectedMaterial] = useState(0);
  const [selectedBodyColor, setselectedBodyColor] = useState(0);
  const [selectedMetallColor, setselectedMetallColor] = useState(0);
  return (
    <>
      <div className="canvas-container">
        <Button
          text={'See In Real Life'}
          backgroundColor={'#4169E1'}
          color={'#ffffff'}
          icon={<VRlogo />}
        />
        <Canvas>
          {/* <ambientLight intensity={0.3} />  */}
          <Suspense fallback={null}>
            <Backpack
              selectedMaterial={selectedMaterial}
              selectedBodyColor={selectedBodyColor}
              selectedMetallColor={selectedMetallColor}
            />
          </Suspense>
          <spotLight
            position={[5, 20, 20]}
            angle={0.05}
            penumbra={1}
            decay={0.5}
            intensity={0.3}
          />
          <directionalLight
            position={[5, 20, 20]}
            intensity={0.3}
          />
          <OrbitControls
            minDistance={4}
            maxDistance={8}
          />
          <Environment preset="apartment" />
        </Canvas>
        <div className="buttons">
          <div className="buttons-container">
            <h2>body colors</h2>
            <hr />
            <div className="color-button">
              {bodyColors.map((color, index) => (
                <div key={index}>
                  <Button
                    backgroundColor={color.hex}
                    circle
                    width={'40px'}
                    height={'40px'}
                    onClick={() => setselectedBodyColor(index)}
                  />
                  <p>{color.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="buttons-container">
            <h2>metal colors</h2>
            <hr />
            <div className="color-button">
              {metalColors.map((color, index) => (
                <div key={index}>
                  <Button
                    backgroundColor={color.hex}
                    circle
                    width={'40px'}
                    height={'40px'}
                    onClick={() => setselectedMetallColor(index)}
                  />
                  <p>{color.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="buttons-container">
            <h2>material</h2>
            <hr />
            <div className="color-button">
              {textile.map((material, index) => (
                <Button
                  key={index}
                  text={material}
                  backgroundColor={'transparent'}
                  onClick={() => setSelectedMaterial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
