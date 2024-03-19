import { SxProps, Theme } from '@mui/material';

export const useScrollBarStyles = (): SxProps<Theme> => {
  return {
    scrollbarWidth: 'thin',
    '&::-webkit-scrollbar': {
      width: '5px',
      height: '0.4em',
    },
    '&::-webkit-scrollbar-track': {
      background: '#f1f1f1',
    },
    '&::-webkit-scrollbar-track:hover': {
      background: '#F1F1F1',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundcolor: '#888',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
  };
};
