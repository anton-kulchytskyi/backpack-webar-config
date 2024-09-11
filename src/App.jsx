/* eslint-disable react/no-unknown-property */
import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import './App.css';
// import { Button, Buttons } from './components/Button/Button';
import VRlogo from '../src/components/VRlogo/VRlogo';

import Backpack from '../src/components/Backpack/Backpack';
import Button from '../src/components/Button/Button';
import AllButtons from '../src/components/AllButtons/AllButtons';

const App = () => {
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
        <AllButtons
          setSelectedMaterial={setSelectedMaterial}
          setselectedBodyColor={setselectedBodyColor}
          setselectedMetallColor={setselectedMetallColor}
        />
      </div>
    </>
  );
};

export default App;
