import * as React from 'react';
import { TileLayer, MapContainer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { showHeatMap } from './utils';
import { COUNTRIES_DATA_MAP } from '../../constants';

export default function Map() {
  const [center, setCenter] = React.useState({ lat: 0, lng: 0 });
  const [zoom, setZoom] = React.useState(3);

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {showHeatMap(COUNTRIES_DATA_MAP, 'Active')}
    </MapContainer>
  );
}
