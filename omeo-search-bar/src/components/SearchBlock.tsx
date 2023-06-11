import Box from '@mui/material/Box';
import * as color from '../styles/colors';
import * as MUI from '../styles/MUIstyles';
import styles from '../styles/SearchBlock.module.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRange } from '@mui/x-date-pickers-pro';
import dayjs, { Dayjs } from 'dayjs';

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
        {/*<Box sx={MUI.boxStyle}>*/}
        <TextField
          required
          id="outlined-required"
          placeholder="From: City, Station Or Airport"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          //defaultValue="Hello World"
        />
        {/*</Box>*/}

        {/*<Box sx={MUI.boxStyle}>*/}

        <TextField
          required
          id="outlined-required"
          placeholder="To: City, Station Or Airport"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          //defaultValue="Hello World"
        />
        {/*</Box>*/}

        {/*<Box sx={MUI.boxStyle}>*/}
        {/*<input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />*/}

        <DateRangePicker
          value={dateRange}
          onChange={(newValue) => setDateRange(newValue)}
          localeText={{
            start: 'Departure',
            end: '+ Add return'
          }}
        />
        {/*<DateRangeSelection onDateRangeChange={onDateRangeChange}></DateRangeSelection>*/}
        {/*</Box>*/}
        {/*<div>*/}
        {/*
          <ButtonOmio
            onClick={() => {
              console.log('Search!');
            }}
          >
            Search
          </ButtonOmio>*/}
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
