import * as color from '../styles/colors';

export const textField = {
  display: 'flex',
  flexDirection: 'row',
  justifyItems: 'center',
  height: '47px',
  maxWidth: '260px',
  backgroundColor: '#f1f2f6',
  color: '#132968',
  transition: 'border .15s',
  borderRadius: '8px',
  paddingRight: '10px',
  border: '1px solid transparent',
  '& input': {
    color: '#132968',
    fontSize: '16px'
  },
  '&:hover': {
    border: '1px solid #a1a9c3'
  },
  '@media (max-width: 769px)': {
    maxWidth: '1000px'
  }
};

export const textFieldIcon = {
  color: '#a1a9c3',
  marginLeft: '8px',
  marginRight: '8px',
  height: '24px',
  width: '24px'
};

export const textFieldIconDropDown = {
  color: '#132968',
  marginLeft: '8px',
  marginRight: '4px',
  height: '20px',
  width: '20px'
};

export const slotPropsForData = {
  fontFamily: '"GT Walsheim Pro",Arial,sans-serif',
  color: color.OMIO_VIOLET,
  paddingLeft: '12px',
  paddingRight: '12px',
  backgroundColor: '#f1f2f6',
  borderRadius: '8px',
  height: '48px'
};
