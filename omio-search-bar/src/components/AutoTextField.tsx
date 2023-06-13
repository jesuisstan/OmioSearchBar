import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import * as MUI from '../styles/MUIstyles';
import RoomIcon from '@mui/icons-material/Room';
import * as color from '../styles/colors';

interface AutoTextFieldProps {
  placeholder: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  icon: React.ReactNode;
  popularCities?: any[];
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const AutoTextField: React.FC<AutoTextFieldProps> = ({
  placeholder,
  setCity,
  icon,
  popularCities,
  setText
}) => {
  const setDestination = (value: string) => {
    let cityUniqueName = '';

    const foundCity = popularCities?.find((city) => city.local_name === value);
    if (foundCity) {
      cityUniqueName = foundCity.unique_name;
    }

    setCity(cityUniqueName || '');
  };

  const renderOption = (
    props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
    option: any
  ): React.ReactNode => {
    const label = option;

    return (
      <li {...props}>
        <span
          style={{
            color: color.OMIO_VIOLET,
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            marginLeft: '-15px',
            fontFamily: '"GT Walsheim Pro",Arial,sans-serif'
          }}
        >
          <RoomIcon sx={MUI.textFieldIconDropDown} /> {label}
        </span>
      </li>
    );
  };

  return (
    <div style={{ width: '100%' }}>
      <Autocomplete
        freeSolo
        onChange={(event, value) => setDestination(value)}
        id="free-solo-2-demo"
        disableClearable
        options={popularCities!.map((item) => item.local_name)}
        renderInput={(params) => (
          <TextField
            variant="standard"
            {...params}
            InputProps={{
              style: { fontFamily: '"GT Walsheim Pro",Arial,sans-serif' },
              ...params.InputProps,
              startAdornment: icon,
              disableUnderline: true,
              type: 'search'
            }}
            placeholder={placeholder}
            onChange={(event) => {
              setText(event.target.value);
              if (event.target.value.length === 0) {
                setCity('');
              }
            }}
            sx={MUI.textField}
          />
        )}
        renderOption={renderOption}
      />
    </div>
  );
};

export default AutoTextField;
