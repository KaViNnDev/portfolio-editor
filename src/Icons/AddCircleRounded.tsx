import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';
import { SvgProp } from './types';

export const AddCircleRounded: React.FC<SvgProp> = () => {
  return (
    <Box
      sx={({ colors, borderRadii }) => ({
        backgroundColor: colors.veryLightGray,
        borderRadius: borderRadii.full,
      })}
    >
      <AddIcon
        fontSize="small"
        sx={({ colors }) => ({
          color: colors.black,
        })}
      />
    </Box>
  );
};
