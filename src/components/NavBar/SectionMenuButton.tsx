import { ArrowDropDown } from '@mui/icons-material';
import { ButtonBase } from '@mui/material';
import React from 'react';
import { NAV_SECTIONS_LABEL } from './strings';
import { NavFont } from '../typograpies';
import { Colors } from '../../Theme/colors';
import { SectionList } from '../SectionList/SectionList';
import { FloaterMenu } from '../FloaterMenu/FloaterMenu';

export const SectionMenuButton: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false);
  };

  return (
    <React.Fragment key="section-list">
      <ButtonBase
        disableRipple
        disableTouchRipple
        onClick={handleToggle}
        ref={anchorRef}
        aria-label="Button group with a section list"
      >
        <NavFont>{NAV_SECTIONS_LABEL}</NavFont>
        <ArrowDropDown
          sx={{
            transitionProperty: 'transform',
            transitionDuration: '0.5s',
            transform: `rotateZ(${open ? '180deg' : '0deg'})`,
          }}
          htmlColor={Colors.white}
        />
      </ButtonBase>
      <FloaterMenu
        handleClose={handleClose}
        open={open}
        anchorEl={anchorRef}
        menuPlacement="bottom-start"
      >
        <SectionList
          isMenuList
          handleClose={() => setOpen(() => false)}
        />
      </FloaterMenu>
    </React.Fragment>
  );
};
