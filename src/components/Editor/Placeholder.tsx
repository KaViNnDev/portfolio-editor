import { Box } from '@mui/material';
import React from 'react';
import { EDITOR_PLACEHOLDER } from './strings';
import { PlaceholderFont } from '../typograpies';

export const Placeholder: React.FC = () => {
  return (
    <Box
      sx={({ colors }) => ({
        position: 'absolute',
        top: '0px',
        color: colors.black,
        opacity: 1,
        userSelect: 'none',
        display: 'inline',
      })}
    >
      <PlaceholderFont>{EDITOR_PLACEHOLDER}</PlaceholderFont>
    </Box>
  );
};
