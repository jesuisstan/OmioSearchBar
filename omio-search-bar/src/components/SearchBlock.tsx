/*
React component responsible for rendering a search block with input fields
for selecting the origin and destination cities, departure and return dates, and a search button.
The input fields are autocompleted based on popular city suggestions fetched from the server.
The component Uses the 'LocalizationProvider' to configure the date picker's localization settings. 
It uses the AdapterDayjs to integrate dayjs as the date library.
*/

import { useEffect, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import AutoTextField from './AutoTextField';
import { fetchDataFrom } from '../utils/fetchDataFrom';
import { fetchDataTo } from '../utils/fetchDataTo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { handleSearch } from '../utils/handleSearch';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import RoomIcon from '@mui/icons-material/Room';
import * as MUI from '../styles/MUIstyles';
import styles from '../styles/SearchBlock.module.css';

export interface City {
  id: string;
  unique_name: string;
  local_name: string;
}

const SearchBlock = ({
  roundTrip,
  needAccommodation
}: {
  roundTrip: boolean;
  needAccommodation: boolean;
}) => {
  const [textFrom, setTextFrom] = useState('');
  const [from, setFrom] = useState('');

  const [textTo, setTextTo] = useState('');
  const [to, setTo] = useState('');

  const [departureDate, setDepartureDate] = useState<Dayjs | null>(dayjs());
  const [returnDate, setReturnDate] = useState<Dayjs | null>(null);

  const [popularFromCities, setPopularFromCities] = useState<City[]>([]);
  const [popularToCities, setPopularToCities] = useState<City[]>([]);

  useEffect(() => {
    /* fetching cities for autocomplete to fly from
      Called on load and changing Origin (From) text field */
    fetchDataFrom({ textFrom, setPopularFromCities });
  }, [textFrom]);

  useEffect(() => {
    /* fetching cities for autocomplete to fly from
      Called on load and on setting new value to var 'from'
      or changing Destination (To) text field */
    fetchDataTo({ from, textTo, setPopularToCities });
  }, [from, textTo]);

  useEffect(() => {
    /* Automaticly sets the return date (7 days plus today)
      when user chooses that the trip would be round */
    setReturnDate(roundTrip ? dayjs().add(7, 'day') : null);
  }, [roundTrip]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.searchBlock}>
        <div className={styles.citiesGroup}>
          <AutoTextField
            placeholder={'From: City, Station Or Airport'}
            setCity={setFrom}
            icon={<TripOriginIcon sx={MUI.textFieldIcon} />}
            popularCities={popularFromCities}
            setText={setTextFrom}
          />
          <AutoTextField
            placeholder={'To: City, Station Or Airport'}
            setCity={setTo}
            icon={<RoomIcon sx={MUI.textFieldIcon} />}
            popularCities={popularToCities}
            setText={setTextTo}
          />
        </div>

        <div className={styles.datesGroup}>
          <div className={styles.date}>
            <DatePicker
              value={departureDate}
              onChange={(newValue) => setDepartureDate(newValue)}
              format="ddd, MMM DD"
              disablePast
              slotProps={{
                textField: {
                  placeholder: '+ Add return',
                  variant: 'standard',
                  InputProps: {
                    readOnly: true,
                    disableUnderline: true,
                    style: MUI.slotPropsForData
                  }
                }
              }}
            />
          </div>
          <div className={styles.date}>
            <DatePicker
              value={returnDate}
              disabled={roundTrip ? false : true}
              onChange={(newValue) => setReturnDate(newValue)}
              format="ddd, MMM DD"
              disablePast
              slotProps={{
                textField: {
                  placeholder: '+ Add return',
                  variant: 'standard',
                  InputProps: {
                    readOnly: true,
                    disableUnderline: true,
                    style: MUI.slotPropsForData
                  }
                }
              }}
            />
          </div>
        </div>

        <div className={styles.wrapBtn}>
          <button
            className={styles.btn}
            onClick={() =>
              handleSearch(
                from,
                to,
                departureDate?.toDate(),
                returnDate?.toDate(),
                roundTrip,
                needAccommodation
              )
            }
          >
            Search
          </button>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default SearchBlock;
