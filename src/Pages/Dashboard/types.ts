export interface CountryStates {
  Active: number;
  City: string;
  CityCode: string;
  Confirmed: number;
  Country: string;
  CountryCode: string;
  Date: string;
  Deaths: number;
  ID: string;
  Lat: string;
  Lon: string;
  Province: string;
  Recovered: number;
}

export interface Country {
  Slug: string;
  Country: string;
  ISO2: string;
}

export interface CountryInformationState {
  id: string;
  active: number | string;
  confirmed: number | string;
  country: string;
  deaths: number | string;
  recovered: number | string;
}
