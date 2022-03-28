import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CovidCountriesTable from './Pages/Dashboard/Components/CovidCountriesTable';
import Map from './Pages/Dashboard/Components/Map';
import { AutoCompleteOption } from './Pages/Dashboard/Components/PlotGraph/types';
import { MAPPED_STATUSES } from './Pages/Dashboard/Components/PlotGraph/constants';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { CaseType } from './Pages/Dashboard/Components/Map/types';
import PlotGraph from './Pages/Dashboard/Components/PlotGraph';

function App() {
  const [selectedStatus, setSelectedStatus] = React.useState<AutoCompleteOption>(MAPPED_STATUSES[0]);

  return (
    <Container maxWidth={'xl'}>
      <Typography variant={'h1'}>Covid Tracker</Typography>
      <CovidCountriesTable />
      <Box height="100vh" mt={2} display="flex" flexDirection="column" gap={2}>
        <Autocomplete
          value={selectedStatus}
          onChange={(_, status) => {
            setSelectedStatus(status as AutoCompleteOption);
          }}
          disablePortal
          options={MAPPED_STATUSES}
          renderInput={(params) => <TextField {...params} label="Select a status" />}
        />
        <Map status={selectedStatus.value as CaseType} />
      </Box>
      <Box mt={2}>
        <PlotGraph />
      </Box>
    </Container>
  );
}

export default App;
