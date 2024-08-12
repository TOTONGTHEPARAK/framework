// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MapPage from './page/MapPage';
import BunnyPage from './page/BunnyPage';
import BunnyPointCloud from './page/PointCloud';
import './App.css'; // Import CSS file
import 'cesium/Build/Cesium/Widgets/widgets.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>3D Viewer</h1>
          <nav>
            <ul>
              <li><Link to="/map">Map Viewer</Link></li>
              <li><Link to="/bunny">Bunny Mesh Viewer</Link></li>
              <li><Link to="/pointcloud">Bunny Point Cloud</Link></li>
            </ul>
          </nav>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/map" element={<MapPage />} />
            <Route path="/bunny" element={<BunnyPage />} />
            <Route path="/pointcloud" element={<BunnyPointCloud />} />
            <Route path="/" element={<h2>Welcome to 3D Viewer</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
