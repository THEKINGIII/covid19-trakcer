import { axiosInstance } from '../../Utils/axios';

export class CovidService {
  #baseURL = import.meta.env.VITE_API_URL;

  getSummary() {
    const url = '/summary';
    return axiosInstance.get(url).then((res) => console.log({ res }));
  }

  getCountrySummary<T>(country: string, date = '2022-03-26T00:00:00Z') {
    const url = `/live/country/${country}/status/all/date/${date}`;

    return axiosInstance.get<T>(url).then((res) => res.data);
  }

  getCountries<T>() {
    const url = '/countries';
    return axiosInstance.get<T>(url).then((resp) => resp.data);
  }

  getAllData() {
    const url = '/all';
    return axiosInstance.get(url).then((res) => res.data);
  }
}
