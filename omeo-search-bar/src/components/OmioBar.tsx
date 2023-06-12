import { useState } from 'react';
import SearchBlock from './SearchBlock';
import TripSwitcher from './TripSwitcher';
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from '../styles/OmioBar.module.css';

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
        <h2>One-way</h2>

        <SearchBlock roundTrip={roundTrip} />

        <FormControlLabel
          control={<TripSwitcher onClick={toogleRoundTrip} />}
          label=""
          labelPlacement="bottom"
          sx={{ margin: '0' }}
        />
      </div>
    </div>
  );
};

export default OmioBar;
