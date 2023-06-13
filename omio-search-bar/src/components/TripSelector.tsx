import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import * as color from '../styles/colors';

const TripSelector = ({
  roundTrip,
  setRoundTrip
}: {
  roundTrip: boolean;
  setRoundTrip: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

	console.log(roundTrip)
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <NativeSelect
          sx={{
            fontFamily: '"GT Walsheim Pro",Arial,sans-serif',
            fontWeight: '400',
            fontSize: '14px',
            marginLeft: '8px',
            color: color.OMIO_VIOLET
          }}
          disableUnderline
          defaultValue={'One-way'}
          inputProps={{
            id: 'uncontrolled-native'
          }}
          onChange={(e) => {
						
							setRoundTrip(!roundTrip)
						
					}}
        >
          <option value={'One way'}>One-way</option>
          <option value={'Round trip'}>Round trip</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default TripSelector;
