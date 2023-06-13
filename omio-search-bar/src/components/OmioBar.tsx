import { useState } from 'react';
import SearchBlock from './SearchBlock';
import AccommodationSwitcher from './AccommodationSwitcher';
import FormControlLabel from '@mui/material/FormControlLabel';
import TripSelector from './TripSelector';
import styles from '../styles/OmioBar.module.css';

const OmioBar: React.FC = () => {
  const [roundTrip, setRoundTrip] = useState(false);
  const [needAccommodation, setNeedAccommodation] = useState(
    localStorage.getItem('needAccommodation') ? true : false
  );

  const toogleNeedAccommodation = () => {
    if (needAccommodation === false) {
      setNeedAccommodation(true);
      localStorage.setItem('needAccommodation', 'true');
    } else {
      setNeedAccommodation(false);
      localStorage.removeItem('needAccommodation');
    }
  };

  return (
    <div className={styles.basicCard}>
      <div className={styles.searchCard}>
        <TripSelector roundTrip={roundTrip} setRoundTrip={setRoundTrip} />
        <SearchBlock roundTrip={roundTrip} setRoundTrip={setRoundTrip} />
        <FormControlLabel
          control={<AccommodationSwitcher onClick={toogleNeedAccommodation} />}
          label=""
          labelPlacement="bottom"
          sx={{ margin: '0' }}
        />
      </div>
    </div>
  );
};

export default OmioBar;
