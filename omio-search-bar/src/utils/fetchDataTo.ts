import axios from 'axios';
import { City } from '../components/SearchBlock';

export const fetchDataTo = async ({
  from,
  textTo,
  setPopularToCities
}: {
  from: string;
  textTo: string;
  setPopularToCities: React.Dispatch<React.SetStateAction<City[]>>;
}) => {
  // fetching "popular to" data in case the departure city is selected
  if (from) {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.comparatrip.eu/cities/popular/from/${from}/5`
        );
        setPopularToCities(response.data);
      } catch (error) {
        console.error('Error fetching "popular to" data:', error);
      }
    };

    fetchData();
  } else if (textTo) {
    // fetching autosuggestions in case user is typing a destination city name
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.comparatrip.eu/cities/autocomplete/?q=${textTo}`
        );
        setPopularToCities(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  } else if (!textTo) {
    setPopularToCities([]);
  }
};
