import { Box, BoxProps } from '@mui/material';
import { PropsWithChildren } from 'react';
import { sectionProp } from '../Sections/types';
import { useScrollBarStyles } from '../Hooks/useScrollBarStyles';

interface CardsContainerProps extends PropsWithChildren, sectionProp, BoxProps {
  direction?: 'row' | 'column';
}

export const CardsContainer: React.FC<CardsContainerProps> = ({
  isEditable,
  children,
  style,
  direction,
}) => {
  const scrollbarStyles = useScrollBarStyles();
  return (
    <Box
      sx={{
        display: 'flex',
        minWidth: { md: '100%' },
        flexDirection: {
          xs: direction ?? isEditable ? 'row' : 'column',
          md: direction ?? 'row',
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
