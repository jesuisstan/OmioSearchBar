import axios from 'axios';
import { City } from '../components/SearchBlock';

export const fetchDataFrom = async ({
  textFrom,
  setPopularFromCities
}: {
  textFrom: string;
  setPopularFromCities: React.Dispatch<React.SetStateAction<City[]>>;
}) => {
  if (!textFrom) {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.comparatrip.eu/cities/popular/5'
        );
        setPopularFromCities(response.data);
      } catch (error) {
        console.error('Error fetching "popular from" data:', error);
      }
    };

    fetchData();
  } else if (textFrom) {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.comparatrip.eu/cities/autocomplete/?q=${textFrom}`
        );
        setPopularFromCities(response.data);
      } catch (error) {
        console.error('Error autocompleting "popular from" data:', error);
      }
    };

    fetchData();
  }
};
