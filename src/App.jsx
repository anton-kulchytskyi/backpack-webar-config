/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, useTexture, OrbitControls } from '@react-three/drei'
import './App.css'

const textile = ['denim', 'fabric', 'leather']
const colors = [{name: 'brown', hex: '#8B4512'}, {name: 'black', hex: '#1A1A1A'}, {name: 'blue', hex: '#104D97'}]

function Backpack({ selectedMaterial, selectedColor }) {
  console.log(textile, colors, selectedMaterial, selectedColor)
  const { nodes, materials } = useGLTF('backpack/backpack.glb')
  const textures = useTexture([
    'backpack/denim_baseColor.jpg',
    'backpack/denim_normal.jpg',
    'backpack/denim_occlusionRoughnessMetallic.jpg',
    'backpack/fabric_baseColor.jpg',
    'backpack/fabric_normal.jpg',
    'backpack/fabric_occlusionRoughnessMetallic.jpg',
    'backpack/leather_baseColor.jpg',
    'backpack/leather_normal.jpg',
    'backpack/leather_occlusionRoughnessMetallic.jpg'
  ])

  const texturesPerBackpack = textile.length;

  console.log(textures[selectedMaterial * texturesPerBackpack])
  console.log(colors[selectedColor].hex)

  return (
    <group dispose={null}>
      <group position={[0, -2, 0]} scale={0.008}>
        <mesh geometry={nodes.Mesh.geometry}>
          <meshStandardMaterial 
            map={textures[selectedMaterial * texturesPerBackpack]} 
            normalMap={textures[selectedMaterial * texturesPerBackpack + 1]}
            roughnessMap={textures[selectedMaterial * texturesPerBackpack + 2]}
            color={colors[selectedColor].hex}
          />
        </mesh>

        <mesh geometry={nodes.Mesh_1.geometry} material={materials.metall} />
        <mesh geometry={nodes.Mesh_2.geometry} material={materials.strap} />
      </group>
    </group>
  )
}

function App() {
  const [selectedMaterial, setSelectedMaterial] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  return (
    <>
    <h1>See in real life</h1>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <Suspense fallback={null}>
          <Backpack selectedMaterial={selectedMaterial} selectedColor={selectedColor} />
        </Suspense>
        <spotLight position={[5,20,20]} angle={0.15} penumbra={1} decay={0} intensity={0.3} />
        <OrbitControls />
      </Canvas>
      <div className='buttons'>
        <div>
          {textile.map((material, index) => (
            <button key={index} onClick={() => setSelectedMaterial(index)}>
              {material}
            </button>
          ))}
        </div>
        <div>
          {colors.map((color, index) => (
            <button key={index} onClick={() => setSelectedColor(index)}>
              {color.name}
            </button>
          ))}
        </div>
      </div>

    </>
  )
}

export default App
