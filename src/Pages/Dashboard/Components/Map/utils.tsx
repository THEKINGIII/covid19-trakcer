import React from 'react';
import { Circle, Popup } from 'react-leaflet';
import { CountryStates } from '../../types';
import { casesTypeColors } from './constants';
import { CaseType } from './types';

export function showHeatMap(
  countries: Record<string, CountryStates | CountryStates[]>,
  casesType: CaseType = 'Confirmed'
) {
  return Object.values(countries)
    .flat()
    .map((country) => (
      <Circle
        center={[parseFloat(country.Lat), parseFloat(country.Lon)]}
        color={casesTypeColors[casesType].hex}
        fillColor={casesTypeColors[casesType].hex}
        fillOpacity={0.4}
        radius={Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier}
      >
        <Popup>
          <p>{country.Country}</p>
          <p>
            <span>{`${casesType} ${country[casesType]}`}</span>
          </p>
        </Popup>
      </Circle>
    ));
}
