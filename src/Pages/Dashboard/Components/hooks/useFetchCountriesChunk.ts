import * as React from 'react';
import covidServiceClient from '../../../../Services/CovidService';
import { Country, CountryInformationState, CountryStates } from '../../types';
import { queryClient } from '../../../../Utils/queryClient';
import { useQuery } from 'react-query';

function useFetchCountriesChunk(page = 1) {
  const [fetchedCountriesIdList, setFetchedCountriesIdList] = React.useState([]);
  const [countriesInformation, setCountriesInformation] = React.useState<CountryInformationState[]>([]);

  const {
    data: countries,
    isLoading,
    isError,
  } = useQuery(['countries'], () => covidServiceClient.getCountries<Country[]>());

  const sortedCountries = React.useMemo(() => {
    return countries?.sort((firstCountry, secondCountry) => firstCountry.Slug.localeCompare(secondCountry.Slug));
  }, [countries]);

  const limit = page * 5;
  const upperDataLimit = (page + 1) * 5;

  React.useEffect(() => {
    if (!sortedCountries || countriesInformation.length / 5 > page) return;

    if (!isLoading) {
      async function fetchCountryInfoAsChunks() {
        const countriesSlice = sortedCountries?.slice(limit, upperDataLimit) as Country[];

        const chunkedData = countriesSlice?.map(async (country) => {
          return await covidServiceClient.getCountrySummary<CountryStates>(country.Slug);
        });

        // @ts-ignore
        await Promise.all<Array<CountryStates[]>>(chunkedData).then((data) => {
          console.log({ data });
          const mappedData = data.map((status: CountryStates[], index) => {
            const [countryStatus] = status;

            return {
              id: countryStatus?.ID ?? index,
              active: countryStatus?.Active ?? 'N/A',
              confirmed: countryStatus?.Confirmed ?? 'N/A',
              country: countryStatus?.Country ?? (countriesSlice && countriesSlice[index].Country),
              deaths: countryStatus?.Deaths ?? 'N/A',
              recovered: countryStatus?.Recovered ?? 'N/A',
            };
          });

          setCountriesInformation((prevData) => [...prevData, ...mappedData]);
        });
      }

      fetchCountryInfoAsChunks();
    }
  }, [isLoading, page, sortedCountries]);

  return { countriesInformation, countries: sortedCountries };
}

export default useFetchCountriesChunk;
