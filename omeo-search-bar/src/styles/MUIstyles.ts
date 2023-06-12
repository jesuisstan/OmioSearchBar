import * as color from './colors';

export const textField = {
  height: '48px',
  backgroundColor: '#f1f2f6',
  color: '#132968',
  transition: 'border .15s',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'row',
  paddingRight: '10px',
  border: '1px solid transparent',
  '& input': {
    color: '#132968',
    fontSize: '16px'
  },
  '&:hover': {
    border: '1px solid #a1a9c3'
  }
};

export const textFieldIcon = {
  color: '#a1a9c3',
  marginLeft: '8px',
  marginRight: '4px',
  height: '20px',
  width: '20px'
};

export const boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '21px',
  maxWidth: '242px',
  minWidth: '200px',
  alignItems: 'center',
  justifyContent: 'center'
};
