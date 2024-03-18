import { ButtonBase, ButtonBaseProps } from '@mui/material';
import React from 'react';
import { CancelButtonFont } from '../typograpies';
import { CANCEL_BUTTON_LABEL } from './strings';

export const CancelButton: React.FC<ButtonBaseProps> = (props) => {
  return (
    <ButtonBase
      disableRipple
      disableTouchRipple
      {...props}
    >
      <CancelButtonFont>{CANCEL_BUTTON_LABEL}</CancelButtonFont>
    </ButtonBase>
  );
};
