// src/BunnyPointCloud.js
import React, { useEffect, useState } from 'react';
import { Viewer, Entity, PointGraphics } from 'resium';
import { Cartesian3, Color } from 'cesium';
import { bunnyVertices } from '../bunny_vertices';
import '../App.css'; // Import CSS file

const BunnyPointCloud = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    // แปลงข้อมูลจุดเวกเตอร์ให้เป็น Cartesian3
    const cartesianPoints = [];
    for (let i = 0; i < bunnyVertices.length; i += 3) {
      cartesianPoints.push(new Cartesian3(bunnyVertices[i], bunnyVertices[i + 1], bunnyVertices[i + 2]));
    }
    setPoints(cartesianPoints);
  }, []);

  return (
    <Viewer full>
      {points.map((position, index) => (
        <Entity key={index} position={position}>
          <PointGraphics pixelSize={2} color={Color.RED} />
        </Entity>
      ))}
    </Viewer>
  );
};

export default BunnyPointCloud;
