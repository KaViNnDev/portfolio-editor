import { Stack, StackProps } from '@mui/material';
import React, { PropsWithChildren } from 'react';

interface NavStackProp extends StackProps, PropsWithChildren {}

export const NavStack: React.FC<NavStackProp> = ({ children, ...props }) => {
  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      {...props}
    >
      {children}
    </Stack>
  );
};
