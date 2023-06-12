import { useEffect, useState } from 'react';
import axios from 'axios';
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
import styles from '../styles/SearchBlock.module.css';

interface City {
  id: string;
  unique_name: string;
  local_name: string;
}

const SearchBlock = ({ roundTrip }: { roundTrip: boolean }) => {
  const [text, setText] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [popularFromCities, setPopularFromCities] = useState<City[]>([]);
  const [popularToCities, setPopularToCities] = useState<City[]>([]);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    if (text) {
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
    }
  }, [text]);

  let POPULAR_FROM = `https://api.comparatrip.eu/cities/popular/from/${from}/5`;
  useEffect(() => {
    if (from) {
      const fetchData = async () => {
        try {
          const response = await axios.get(POPULAR_FROM);
          setPopularToCities(response.data);
        } catch (error) {
          console.error('Error fetching "popular to" data:', error);
        }
      };

      fetchData();
    }
  }, [from]);

  const [dateRange, setDateRange] = useState<DateRange<Dayjs>>([
    dayjs().add(1, 'day'),
    roundTrip ? dayjs().add(8, 'day') : dayjs('')
  ]);

  const handleSearch = () => {
    if (!from) {
      Swal.fire({
        title: 'Oops...',
        text: 'Please, fill in "Departure (from)" field',
        background: 'rgb(245, 245, 245, 0.8)',
        showConfirmButton: true
      });
    } else if (!to) {
      Swal.fire({
        title: 'Oops...',
        text: 'Please, fill in "Destination (to)" field',
        background: 'rgb(245, 245, 245, 0.8)',
        showConfirmButton: true
      });
    } else
      Swal.fire({
        title:
          'Great! Search bar works!\n\nNow U R very welcome to check out my Ecole 42 web project:',
        html: '<a href="http://www.pongthegame.rocks" target="_blank" style="color: #fa6b6b;">www.pongthegame.rocks</a>',
        background: 'rgb(245, 245, 245, 0.8)',
        showConfirmButton: false
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
          setCity={setFrom}
          icon={<TripOriginIcon sx={MUI.textFieldIcon} />}
          popularCities={popularFromCities}
          setText={setText}
        />

        <AutoTextField
          placeholder={'To: City, Station Or Airport'}
          setCity={setTo}
          icon={<RoomIcon sx={MUI.textFieldIcon} />}
          popularCities={popularToCities}
          setText={setText}
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
