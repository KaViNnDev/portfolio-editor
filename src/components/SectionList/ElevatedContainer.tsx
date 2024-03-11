import { Box } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { sizing } from '../../Theme/types';

interface ElevatedContainerProps extends PropsWithChildren {
  size: sizing;
}

export const ElevatedContainer: React.FC<ElevatedContainerProps> = ({ children, size }) => {
  return (
    <Box
      sx={({ colors, MenuListBreakPoint, borderRadii }) => ({
        borderRadius: borderRadii.lg,
        border: `1px solid ${colors.lightGrayish}`,
        boxShadow: `0px 6px 25px 0px ${colors.transparenntBlack}`,
        backgroundColor: colors.white,
        padding: '26px 17px 15px',
        maxWidth: MenuListBreakPoint[size],
        boxSizing: 'border-box',
      })}
    >
      {children}
    </Box>
  );
};
