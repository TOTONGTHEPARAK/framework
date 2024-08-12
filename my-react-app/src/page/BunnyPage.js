// src/BunnyPage.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BunnyMesh from '../BunnyMesh';
import '../App.css'; // Import CSS file

const BunnyPage = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Bunny Mesh Viewer</h1>
      </header>
      <main className="app-main">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <BunnyMesh />
          <OrbitControls />
        </Canvas>
      </main>
    </div>
  );
};

export default BunnyPage;
