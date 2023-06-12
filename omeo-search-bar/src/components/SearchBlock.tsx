import styles from '../styles/SearchBlock.module.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRange } from '@mui/x-date-pickers-pro';
import dayjs, { Dayjs } from 'dayjs';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import RoomIcon from '@mui/icons-material/Room';
import * as MUI from '../styles/MUIstyles';

const SearchBlock = ({ roundTrip }: { roundTrip: boolean }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const [dateRange, setDateRange] = useState<DateRange<Dayjs>>([
    dayjs().add(1, 'day'),
    roundTrip ? dayjs().add(8, 'day') : dayjs('')
  ]);

  const handleSearch = () => {
    console.log('Search!!!');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.searchBlock}>
        <TextField
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
        />

        <TextField
          id="to"
          value={to}
          variant="standard"
          required
          fullWidth
          name="departure from"
          autoComplete="none"
          onChange={(e) => setTo(e.target.value)}
          placeholder="To: City, Station Or Airport"
          InputProps={{
            startAdornment: <RoomIcon sx={MUI.textFieldIcon} />,
            disableUnderline: true
          }}
          sx={MUI.textField}
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
