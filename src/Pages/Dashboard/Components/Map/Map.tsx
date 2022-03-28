import * as React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { showHeatMap } from './utils';
import { COUNTRIES_DATA_MAP } from '../../constants';
import { CaseType } from './types';

export default function Map(props: { status: CaseType }) {
  const data = React.useMemo(() => {
    return showHeatMap(COUNTRIES_DATA_MAP, props.status);
  }, [props.status]);

  return (
    <MapContainer key={props.status} center={{ lat: 0, lng: 0 }} zoom={3} style={{ height: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {data}
    </MapContainer>
  );
}
