import { axiosInstance } from '../../Utils/axios';
import dayjs from 'dayjs';

export class CovidService {
  #baseURL = import.meta.env.VITE_API_URL;

  getCountrySummary<T>(country: string, date = '2022-03-26T00:00:00Z') {
    const url = `/live/country/${country}/status/all/date/${date}`;

    return axiosInstance.get<T>(url).then((res) => res.data);
  }

  getCountries<T>() {
    const url = '/countries';
    return axiosInstance.get<T>(url).then((resp) => resp.data);
  }

  getCountryStatesAfterDate(country: string, status = 'Active', date: string) {
    const url = `/live/country/${country}/status/${status.toLowerCase()}/date/${date}`;
    return axiosInstance.get(url).then((resp) =>
      resp.data.map((state: { [x: string]: any; Date: any }) => {
        return {
          x: dayjs(state.Date).format('YYYY-MM-DD'),
          y: state[status],
        };
      })
    );
  }
}
