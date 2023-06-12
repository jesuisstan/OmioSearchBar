import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import * as MUI from '../styles/MUIstyles';

const AutoTextField = ({
  placeholder,
  onChange,
  icon,
  popularCities
}: {
  placeholder: string;
  onChange: (e: any) => void;
  icon: React.ReactNode;
  popularCities?: any[];
}) => {
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
            sx={MUI.textField}
          />
        )}
      />
    </div>
  );
};

export default AutoTextField;
