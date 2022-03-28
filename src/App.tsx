import * as React from 'react';
import { Container, Typography } from '@mui/material';
import covidServiceClient from './Services/CovidService';
import { useQuery } from 'react-query';
import { useQueries } from 'react-query/types/ts3.8';
import CovidCountriesTable from './Pages/Dashboard/Components/CovidCountriesTable';
import Map from './Pages/Dashboard/Components/Map';

function App() {
  return (
    <Container maxWidth={'xl'}>
      <Typography variant={'h1'}>Covid Tracker</Typography>
      <CovidCountriesTable />
      <div style={{ width: '100vw', height: '100vh' }}>
        <Map />
      </div>
    </Container>
  );
}

export default App;
