// MapComponent.js
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';
import './MapComponent.css'; // Import CSS file

// แก้ไขปัญหา icon ไม่แสดงใน React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapComponent = () => {
  const [position, setPosition] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition([position.coords.latitude, position.coords.longitude]);
      }, (error) => {
        console.error('Error getting location: ', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const handleSearch = async () => {
    const latLonRegex = /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/;
    if (latLonRegex.test(searchQuery)) {
      const [lat, lon] = searchQuery.split(',').map(Number);
      setSearchResult([lat, lon]);
    } else {
      try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery}`);
        if (response.data.length > 0) {
          const { lat, lon } = response.data[0];
          setSearchResult([parseFloat(lat), parseFloat(lon)]);
        }
      } catch (error) {
        console.error('Error searching location: ', error);
      }
    }
  };

  return (
    <div className="map-container">
      <MapContainer center={[51.505, -0.09]} zoom={2} style={{ height: "90vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {position && <UpdateMapCenter position={position} />}
        {position && (
          <Marker position={position}>
            <Popup>You are here</Popup>
          </Marker>
        )}
        {searchResult && <UpdateMapCenter position={searchResult} />}
        {searchResult && (
          <Marker position={searchResult}>
            <Popup>Search result</Popup>
          </Marker>
        )}
        <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter place name or lat,lng"
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>
      </MapContainer>
    </div>
  );
};

const UpdateMapCenter = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position, 13);
  }, [map, position]);
  return null;
};

export default MapComponent;
