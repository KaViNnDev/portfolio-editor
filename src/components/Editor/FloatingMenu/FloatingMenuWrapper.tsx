import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

export const FloatingMenuWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={({ borderRadii, colors }) => ({
        borderRadius: borderRadii.floatingMenuWrapper,
        border: `1px solid  ${colors.black}`,
        padding: '6px 8px',
        display: 'flex',
        flexDirection: 'row',
        gap: '3px',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
      })}
    >
      {children}
    </Box>
  );
};
