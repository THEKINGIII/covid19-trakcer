import { Country } from '../../types';
import dayjs from 'dayjs';

export function countryAutoCompleteMapper(country: Country) {
  return {
    label: country.Country,
    value: country.Slug,
  };
}

export function getSixMonthsFromNow() {
  return dayjs().subtract(6, 'month').toISOString();
}
