import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';

export const AddCircleRounded: React.FC = () => {
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
