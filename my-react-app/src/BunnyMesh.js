// src/BunnyMesh.js
import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const BunnyMesh = () => {
  const mesh = useRef();
  const obj = useLoader(OBJLoader, '/bunny.obj'); // ใช้เส้นทางไฟล์ที่ถูกต้องใน public folder

  return <primitive ref={mesh} object={obj} position={[0, 0, 0]} />;
};

export default BunnyMesh;
