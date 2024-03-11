import React from 'react';
import { AppenderFont } from './typograpies';
import AddIcon from '@mui/icons-material/Add';
import { AppenderInnerFontVariant } from './types';

interface AppenderInnerFontProp {
  label: string;
  variant: AppenderInnerFontVariant;
}

export const AppenderInnerFont: React.FC<AppenderInnerFontProp> = ({ label, variant }) => {
  const direction = variant === 'Horizontal' ? 'row' : 'column';
  return (
    <AppenderFont
      sx={{
        display: 'flex',
        flexDirection: direction,
        justifyContent: 'center',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <AddIcon /> {label}
    </AppenderFont>
  );
};
