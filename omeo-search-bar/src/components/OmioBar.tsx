import Box from '@mui/material/Box';
import * as color from '../styles/colors';
import * as MUI from '../styles/MUIstyles';
import styles from '../styles/OmioBar.module.css';
import { useState } from 'react';
import SearchBlock from './SearchBlock';
import FormControlLabel from '@mui/material/FormControlLabel';
import TripSwitcher from './TripSwitcher';

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
        {/*<Box sx={MUI.boxStyle}>*/}
        <h2>One-way</h2>
        {/*</Box>*/}

        {/*<Box sx={MUI.boxStyle}>*/}

        <SearchBlock roundTrip={roundTrip} />
        {/*</Box>*/}

        {/*<Box sx={MUI.boxStyle}>*/}
        {/*<input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />*/}

        <FormControlLabel
          control={<TripSwitcher onClick={toogleRoundTrip} />}
          label=""
          labelPlacement="bottom"
        />
      </div>
    </div>
  );
};

export default OmioBar;
