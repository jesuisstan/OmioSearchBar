import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as color from '../styles/colors';

const TripSelector = ({
  roundTrip,
  setRoundTrip
}: {
  roundTrip: boolean;
  setRoundTrip: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant="standard">
        <Select
          sx={{
            fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
            fontWeight: '400',
            fontSize: '14px',
            marginLeft: '-8px',
            color: color.OMIO_VIOLET
          }}
          disableUnderline
          defaultValue={roundTrip ? 'Round trip' : 'One-way'}
          onChange={(e) => {
            setRoundTrip(!roundTrip);
          }}
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'center'
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left'
            }
          }}
        >
          <MenuItem
            sx={{ fontFamily: '"GT Walsheim Pro", Arial, sans-serif' }}
            value={'One-way'}
          >
            One-way
          </MenuItem>
          <MenuItem
            sx={{ fontFamily: '"GT Walsheim Pro", Arial, sans-serif' }}
            value={'Round trip'}
          >
            Round trip
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default TripSelector;
