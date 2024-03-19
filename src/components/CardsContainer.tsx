import { Box, BoxProps } from '@mui/material';
import { PropsWithChildren } from 'react';
import { sectionProp } from '../Sections/types';
import { useScrollBarStyles } from '../Hooks/useScrollBarStyles';
import { Sections } from '../Store/sectionsSlice';

interface CardsContainerProps extends PropsWithChildren, sectionProp, BoxProps {
  direction?: 'row' | 'column';
  sectionType: Sections;
}

export const CardsContainer: React.FC<CardsContainerProps> = ({
  isEditable,
  children,
  style,
  direction,
  sectionType,
}) => {
  const scrollbarStyles = useScrollBarStyles();
  return (
    <Box
      sx={() => {
        const shallApplyGrid = !isEditable && sectionType !== 'experience';
        return {
          display: { xs: 'flex', md: shallApplyGrid ? 'grid' : undefined },
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
          flexWrap: !isEditable ? 'wrap' : undefined,
          gridTemplateColumns: { md: shallApplyGrid ? 'repeat(2, 1fr)' : undefined },
          gridAutoRows: { md: shallApplyGrid ? 'minmax(100px, auto)' : {} },
          scrollbarStyles,
        };
      }}
      style={style}
    >
      {children}
    </Box>
  );
};
