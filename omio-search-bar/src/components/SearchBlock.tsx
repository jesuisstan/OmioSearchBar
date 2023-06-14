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
  setRoundTrip,
  needAccommodation
}: {
  roundTrip: boolean;
  setRoundTrip: React.Dispatch<React.SetStateAction<boolean>>;
  needAccommodation: boolean;
}) => {
  const [textFrom, setTextFrom] = useState('');
  const [from, setFrom] = useState('');

  const [textTo, setTextTo] = useState('');
  const [to, setTo] = useState('');

  const [departureDate, setDepartureDate] = useState<Dayjs | null>(dayjs());
  const [returnDate, setReturnDate] = useState<Dayjs | null>(null);

  console.log(departureDate?.toDate());
  const [popularFromCities, setPopularFromCities] = useState<City[]>([]);
  const [popularToCities, setPopularToCities] = useState<City[]>([]);

  useEffect(() => {
    fetchDataFrom({ textFrom, setPopularFromCities });
  }, [textFrom]);

  useEffect(() => {
    fetchDataTo({ from, textTo, setPopularToCities });
  }, [from, textTo]);

  useEffect(() => {
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
