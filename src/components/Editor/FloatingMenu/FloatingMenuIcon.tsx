import { Box, styled } from '@mui/material';
import { PropsWithChildren } from 'react';

interface FloatingMenuIconProp extends PropsWithChildren {
  handleClick: () => void;
}

const Wrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxHeight: '30px',
  padding: '10px',
  cursor: 'pointer',
});

export const FloatingMenuIcon: React.FC<FloatingMenuIconProp> = ({ children, handleClick }) => {
  return (
    <Wrapper
      component={'div'}
      sx={({ colors, borderRadii }) => {
        return {
          borderRadius: borderRadii.floatingMenuIcon,
          '&:hover': {
            backgroundColor: colors.platinumGray,
          },
        };
      }}
      onClick={handleClick}
    >
      {children}
    </Wrapper>
  );
};
