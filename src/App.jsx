/* eslint-disable react/no-unknown-property */

import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

import { useMediaQuery } from '@uidotdev/usehooks';
import './App.css';
import Backpack from './Components/Backpack/Backpack';
import VRlogo from './Components/VRlogo/VRlogo';
import { Button, Buttons } from './Components/Button/Button';
import QRcode from './Components/QRcode/QRcode';

const App = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(0);
  const [selectedBodyColor, setselectedBodyColor] = useState(0);
  const [selectedMetallColor, setselectedMetallColor] = useState(0);

  const [isQRcodeVisible, setIsQRcodeVisible] = useState(false);

  const isSmallDevice = useMediaQuery('only screen and (max-width : 400px)');

  return (
    <>
      <div className="canvas-container">
        {isSmallDevice ? (
          <a href="https://anton-kulchytskyi.github.io/vr/">
            <Button
              text={'See In Real Life'}
              backgroundColor={'#4169E1'}
              color={'#ffffff'}
              icon={<VRlogo />}
            />
          </a>
        ) : (
          <Button
            text={'See In Real Life'}
            backgroundColor={'#4169E1'}
            color={'#ffffff'}
            icon={<VRlogo />}
            onClick={() => setIsQRcodeVisible(true)}
          />
        )}
        {isQRcodeVisible ? (
          <QRcode
            isQRcodeVisible={isQRcodeVisible}
            setIsQRcodeVisible={setIsQRcodeVisible}
          />
        ) : (
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
        )}

        <Buttons
          setSelectedMaterial={setSelectedMaterial}
          setselectedBodyColor={setselectedBodyColor}
          setselectedMetallColor={setselectedMetallColor}
        />
      </div>
    </>
  );
};

export default App;
