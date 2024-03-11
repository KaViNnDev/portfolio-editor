import React from 'react';
import { BodyFont } from './typograpies';
import AddIcon from '@mui/icons-material/Add';
import { AppenderInnerFontVariant } from './types';

interface AppenderInnerFontProp {
  label: string;
  variant: AppenderInnerFontVariant;
}

export const AppenderInnerFont: React.FC<AppenderInnerFontProp> = ({ label, variant }) => {
  const direction = variant === 'Horizontal' ? 'row' : 'column';
  return (
    <BodyFont
      sx={{
        display: 'flex',
        flexDirection: direction,
        justifyContent: 'center',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <AddIcon /> {label}
    </BodyFont>
  );
};
