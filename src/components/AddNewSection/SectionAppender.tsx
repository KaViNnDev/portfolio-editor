import { Box, ButtonBase, SxProps } from '@mui/material';
import React from 'react';
import { CLICK_TO_ADD_SECTION_LABLE } from './strings';
import { AppenderInnerFont } from './AppenderInnerFont';
import { FloaterMenu } from '../FloaterMenu/FloaterMenu';
import { SectionList } from '../SectionList/SectionList';

interface SectionAppenderProps {
  isInitialSection: boolean;
  wrapperStyle?: SxProps;
}

export const SectionAppender: React.FC<SectionAppenderProps> = ({
  isInitialSection,
  wrapperStyle,
}) => {
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
    <Box sx={{ ...(!isInitialSection ? { px: '76px' } : {}), ...wrapperStyle }}>
      <ButtonBase
        onClick={handleToggle}
        sx={({ colors, borderRadii }) => ({
          typography: CLICK_TO_ADD_SECTION_LABLE,
          width: '100%',
          py: '24px',
          borderRadius: borderRadii.md,
          border: `1.2px dashed ${colors.black}`,
          backgroundColor: colors.veryLightGray,
          boxSizing: 'border-box',
        })}
        ref={anchorRef}
      >
        <AppenderInnerFont
          label={CLICK_TO_ADD_SECTION_LABLE}
          variant="Horizontal"
        />
      </ButtonBase>
      <FloaterMenu
        anchorEl={anchorRef}
        open={open}
        handleClose={handleClose}
        menuPlacement="bottom"
      >
        <SectionList
          isMenuList={false}
          handleClose={() => setOpen(() => false)}
        />
      </FloaterMenu>
    </Box>
  );
};
