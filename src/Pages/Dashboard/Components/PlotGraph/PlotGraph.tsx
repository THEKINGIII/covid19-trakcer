import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Country } from '../../types';
import { countryAutoCompleteMapper, getSixMonthsFromNow } from './utils';
import { AutoCompleteOption } from './types';
import { useQuery } from 'react-query';
import covidServiceClient from '../../../../Services/CovidService';
import { Box } from '@mui/material';
import { MAPPED_STATUSES } from './constants';
import PlotGraphChart from './Graph';

export default function PlotGraph() {
  const { data: countries } = useQuery(['countries'], () => covidServiceClient.getCountries<Country[]>());

  const mappedCountriesOptions = React.useMemo(() => {
    if (!countries) return [];
    return countries?.map(countryAutoCompleteMapper);
  }, [countries]);

  const [selectedCountry, setSelectedCountry] = React.useState<AutoCompleteOption>(mappedCountriesOptions[0]);
  const [selectedStatus, setSelectedStatus] = React.useState<AutoCompleteOption>(MAPPED_STATUSES[0]);

  const date = getSixMonthsFromNow();

  const { data: countryData } = useQuery<{ x: string; y: number }[]>(
    ['country', selectedCountry?.value, selectedStatus],
    () => covidServiceClient.getCountryStatesAfterDate(selectedCountry.value, selectedStatus.value, date),
    {
      enabled: !!selectedCountry?.value,
    }
  );

  return (
    <>
      <Box display="flex" width="100%" gap={2} mb={4}>
        <Box flex={1}>
          <Autocomplete
            value={selectedCountry}
            onChange={(_, country) => {
              setSelectedCountry(country as AutoCompleteOption);
            }}
            disablePortal
            options={mappedCountriesOptions}
            renderInput={(params) => <TextField {...params} label="Select a country" />}
          />
        </Box>
        <Box flex={1}>
          <Autocomplete
            value={selectedStatus}
            onChange={(_, status) => {
              setSelectedStatus(status as AutoCompleteOption);
            }}
            disablePortal
            options={MAPPED_STATUSES}
            renderInput={(params) => <TextField {...params} label="Select a status" />}
          />
        </Box>
      </Box>
      <PlotGraphChart data={countryData ?? []} caseName={selectedStatus.label} />
    </>
  );
}
