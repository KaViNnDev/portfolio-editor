import React from 'react';
import { IconVariants, SvgProp } from '../../Icons/types';
import { ButtonBase } from '@mui/material';
import { Icons } from '../../Icons/Icons';

interface ActionIconProp extends SvgProp {
  iconVaraiant: IconVariants;
  onClick?: () => void;
}

export const ActionIcon: React.FC<ActionIconProp> = ({ onClick, iconVaraiant, ...restProps }) => {
  return (
    <ButtonBase
      disableRipple
      disableTouchRipple
      onClick={onClick}
      sx={({ colors }) => ({
        width: '33.25px',
        height: '33.25px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightSlateGray,
        borderRadius: '6.9px',
      })}
    >
      <Icons
        variant={iconVaraiant}
        {...restProps}
      />
    </ButtonBase>
  );
};
