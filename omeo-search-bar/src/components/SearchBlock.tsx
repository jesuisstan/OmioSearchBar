import styles from '../styles/SearchBlock.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRange } from '@mui/x-date-pickers-pro';
import dayjs, { Dayjs } from 'dayjs';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import RoomIcon from '@mui/icons-material/Room';
import * as MUI from '../styles/MUIstyles';
import AutoTextField from './AutoTextField';
import Swal from 'sweetalert2';
import * as color from '../styles/colors';

interface City {
  id: string;
  unique_name: string;
  local_name: string;
  // Add more properties based on the response data structure
}

const SearchBlock = ({ roundTrip }: { roundTrip: boolean }) => {
  const [text, setText] = useState('paris');
  const [from, setFrom] = useState('Z');
  const [to, setTo] = useState('');

  const [popularFromCities, setPopularFromCities] = useState<City[]>([]);
  const [popularToCities, setPopularToCities] = useState<City[]>([]);
  const [autocompletedCities, setAutocompletedCities] = useState<City[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.comparatrip.eu/cities/popular/5'
        );
        setPopularFromCities(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.comparatrip.eu/cities/autocomplete/?q=${text}`
        );
        setPopularFromCities(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [text]);

  let POPULAR_FROM = `https://api.comparatrip.eu/cities/popular/from/${from}/5`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(POPULAR_FROM);
        setPopularToCities(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [from]);

  const handleTextInput = (e: any) => {
    setText(e.target.value.toLowerCase());
  };

  const onSubmitHandler = () => {
    setFrom(text.toLowerCase());
  };

  const onTo = (e: any) => {
    setTo(e.target.value);
  };

  const [dateRange, setDateRange] = useState<DateRange<Dayjs>>([
    dayjs().add(1, 'day'),
    roundTrip ? dayjs().add(8, 'day') : dayjs('')
  ]);

  const handleSearch = () => {
    Swal.fire({
      title: 'Welcome to my Ecole 42\nweb project:',
      html: '<a href="http://www.pongthegame.rocks" target="_blank" style="color: #fa6b6b;">www.pongthegame.rocks</a>',
      background: color.OMEO_WHITE,
      showConfirmButton: false,
      showCloseButton: true
    });
  };

  console.log('TEXT = ' + text);
  console.log('FROM = ' + from);
  console.log('TO = ' + to);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.searchBlock}>
        <AutoTextField
          placeholder={'From: City, Station Or Airport'}
          onChange={handleTextInput}
          from={from}
          setFrom={setFrom}
          icon={<TripOriginIcon sx={MUI.textFieldIcon} />}
          popularCities={popularFromCities}
        />
        {/*<TextField
          id="from"
          value={from}
          variant="standard"
          required
          fullWidth
          name="departure from"
          autoComplete="none"
          onChange={(e) => setFrom(e.target.value)}
          placeholder="From: City, Station Or Airport"
          InputProps={{
            startAdornment: <TripOriginIcon sx={MUI.textFieldIcon} />,
            disableUnderline: true
          }}
          sx={MUI.textField}
        />*/}

        <AutoTextField
          placeholder={'To: City, Station Or Airport'}
          onChange={onTo}
          from={from}
          setFrom={setFrom}
          icon={<RoomIcon sx={MUI.textFieldIcon} />}
          popularCities={popularToCities}
        />

        <div style={{ width: '100%' }}>
          <DateRangePicker
            value={dateRange}
            onChange={(newValue) => setDateRange(newValue)}
            localeText={{
              start: 'Departure',
              end: '+ Add return'
            }}
            //sx={{
            //  height: '52px',
            //  backgroundColor: '#f1f2f6',
            //  color: '#132968',
            //  transition: 'border .15s',
            //  borderRadius: '8px',
            //  display: 'flex',
            //  flexDirection: 'row',
            //  paddingRight: '10px',
            //  border: '1px solid transparent',
            //  '& input': {
            //    color: '#132968',
            //    fontSize: '16px'
            //  },
            //  '&:hover': {
            //    border: '1px solid #a1a9c3'
            //  }
            //}}
          />
        </div>

        <div className={styles.wrapBtn}>
          <button className={styles.btn} onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default SearchBlock;
