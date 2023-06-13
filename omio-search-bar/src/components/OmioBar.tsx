import { useState } from 'react';
import SearchBlock from './SearchBlock';
import AccommodationSwitcher from './AccommodationSwitcher';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/joy/Typography';
import * as color from '../styles/colors';
import styles from '../styles/OmioBar.module.css';
import TripSelector from './TripSelector';

const OmioBar: React.FC = () => {
  const [roundTrip, setRoundTrip] = useState(false);

  const toogleRoundTrip = () => {
    if (roundTrip === false) {
      setRoundTrip(true);
      localStorage.setItem('roundTrip', 'true');
    } else {
      setRoundTrip(false);
      localStorage.removeItem('roundTrip');
    }
  };

  return (
    <div className={styles.basicCard}>
      <div className={styles.searchCard}>
        {/*<Typography
          sx={{
            fontWeight: '400',
            fontSize: '14px',
            marginLeft: '8px',
            marginBottom: '5px',
            color: color.OMIO_VIOLET,
            fontFamily: '"GT Walsheim Pro", Arial, sans-serif'
          }}
        >
          One way
        </Typography>*/}
        <TripSelector
          roundTrip={roundTrip}
          setRoundTrip={setRoundTrip}
        ></TripSelector>

        <SearchBlock roundTrip={roundTrip} setRoundTrip={setRoundTrip} />

        <FormControlLabel
          control={<AccommodationSwitcher onClick={toogleRoundTrip} />}
          label=""
          labelPlacement="bottom"
          sx={{ margin: '0' }}
        />
      </div>
    </div>
  );
};

export default OmioBar;
