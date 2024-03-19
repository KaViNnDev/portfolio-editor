import { Box, BoxProps } from '@mui/material';
import React, { CSSProperties, PropsWithChildren } from 'react';

interface CardWrapperProps extends PropsWithChildren, BoxProps {
  direction?: 'row' | 'column';
  styles?: CSSProperties;
  isEditable: boolean;
}

export const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  direction,
  styles,
  isEditable,
  ...restProps
}) => {
  return (
    <Box
      sx={({ colors }) => ({
        flex: 1,
        display: 'flex',
        flexDirection: direction ?? 'row',
        border: `1px solid ${colors.silver}`,
        backgroundColor: colors.white,
        borderRadius: '25px',
        padding: '41px 37px',
        flexShrink: 0,
        minWidth: isEditable
          ? {
              xs: '100%',
              md: '359px',
            }
          : undefined,
        boxSizing: 'border-box',
        gap: '23px',
        ...styles,
      })}
      {...restProps}
    >
      {children}
    </Box>
  );
};
