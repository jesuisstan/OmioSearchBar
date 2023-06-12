import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import * as MUI from '../styles/MUIstyles';
import RoomIcon from '@mui/icons-material/Room';
import * as color from '../styles/colors';

interface AutoTextFieldProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  from: string;
  setFrom: React.Dispatch<React.SetStateAction<string>>;
  icon: React.ReactNode;
  popularCities?: any[];
}

const AutoTextField: React.FC<AutoTextFieldProps> = ({
  placeholder,
  onChange,
  from,
  setFrom,
  icon,
  popularCities
}) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setFrom('aaaa'); 
    }
  };

  console.log('FFFFFFFFFFF ' + from);

  const renderOption = (
    props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
    option: any
  ): React.ReactNode => {
    const label = option;

    return (
      <li {...props}>
        <span
          style={{
            color: color.OMEO_VIOLET,
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            marginLeft: '-15px'
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
        id="free-solo-2-demo"
        disableClearable
        options={popularCities!.map((item) => item.local_name)}
        renderInput={(params) => (
          <TextField
            variant="standard"
            {...params}
            InputProps={{
              ...params.InputProps,
              startAdornment: icon,
              disableUnderline: true,
              type: 'search'
            }}
            placeholder={placeholder}
            onChange={onChange}
            onSubmit={handleKeyPress}
            sx={MUI.textField}
          />
        )}
        renderOption={renderOption}
      />
    </div>
  );
};

export default AutoTextField;
