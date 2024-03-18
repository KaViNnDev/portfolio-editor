import { ButtonBase, ButtonProps } from '@mui/material';
import React from 'react';
import { PrimarySaveButtonFont } from '../typograpies';
import { PRIMARY_SAVE_BUTTON_LABEL } from './strings';

export const PrimarySaveButton: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonBase
      sx={({ colors }) => ({
        padding: '8px 28px',
        color: colors.white,
        backgroundColor: colors.skyBlue,
        borderRadius: '50px',
      })}
      disableRipple
      disableTouchRipple
      {...props}
    >
      <PrimarySaveButtonFont>{PRIMARY_SAVE_BUTTON_LABEL}</PrimarySaveButtonFont>
    </ButtonBase>
  );
};
