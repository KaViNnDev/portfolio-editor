import { Box, BoxProps } from '@mui/material';
import { PropsWithChildren } from 'react';
import { sectionProp } from '../Sections/types';
import { useScrollBarStyles } from '../Hooks/useScrollBarStyles';

interface CardsContainerProps extends PropsWithChildren, sectionProp, BoxProps {}

export const CardsContainer: React.FC<CardsContainerProps> = ({ isEditable, children, style }) => {
  const scrollbarStyles = useScrollBarStyles();
  return (
    <Box
      sx={{
        display: 'flex',
        minWidth: { md: '100%' },
        flexDirection: {
          xs: isEditable ? 'row' : 'column',
          md: 'row',
        },
        flex: 1,
        gap: {
          xs: '11px',
          md: '20px',
        },
        overflowX: 'auto',
        ...scrollbarStyles,
      }}
      style={style}
    >
      {children}
    </Box>
  );
};
