import axios, { AxiosRequestConfig } from 'axios';

const defaultAxiosSettings: AxiosRequestConfig = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  ...defaultAxiosSettings,
});
