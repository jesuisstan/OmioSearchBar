/*
Component switches the toombler if user wants to find accommodation too.
Changes var 'needAccommodation' value and
stores a sign to localStorage to keep this Switcher on after page reload.
*/

import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/joy/Typography';
import { styled } from '@mui/material/styles';
import * as color from '../styles/colors';

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 36,
  height: 20,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '0.25s',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor:
          theme.palette.mode === 'dark' ? '#2ECA45' : color.OMIO_BLUE,
        opacity: 1,
        border: 0
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff'
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600]
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 16,
    height: 16
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500
    })
  }
}));

const AccommodationSwitcher = ({ onClick }: { onClick: () => void }) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <IOSSwitch
        checked={
          localStorage.getItem('needAccommodation') === 'true' ? true : false
        }
        sx={{ m: 1 }}
        onClick={onClick}
        color="default"
      />
      <Typography
        sx={{
          fontWeight: '400',
          fontSize: '14px',
          marginLeft: '8px',
          marginBottom: '5px',
          color: color.OMIO_VIOLET,
          fontFamily: '"GT Walsheim Pro", Arial, sans-serif'
        }}
      >
        Find my accommodation
      </Typography>
    </Stack>
  );
};

export default AccommodationSwitcher;
