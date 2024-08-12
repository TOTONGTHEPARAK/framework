// src/MapPage.js
import React from 'react';
import MapComponent from '../MapComponent';
import '../App.css'; // Import CSS file

const MapPage = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Point Cloud Viewer</h1>
      </header>
      <main className="app-main">
        <MapComponent />
      </main>
    </div>
  );
};

export default MapPage;
