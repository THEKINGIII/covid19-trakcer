import * as React from 'react';
import { Container, Typography } from '@mui/material';
import covidServiceClient from './Services/CovidService';
import { useQuery } from 'react-query';
import { useQueries } from 'react-query/types/ts3.8';
import CovidCountriesTable from './Pages/Dashboard/Components/CovidCountriesTable';

function App() {
  return (
    <Container maxWidth={'xl'}>
      <Typography variant={'h1'}>Covid Tracker</Typography>
      <CovidCountriesTable />
    </Container>
  );
}

export default App;
