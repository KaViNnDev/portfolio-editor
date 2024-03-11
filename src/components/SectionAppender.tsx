import { Box, ButtonBase } from '@mui/material';
import React from 'react';
import { CLICK_TO_ADD_SECTION_LABLE } from './strings';
import { AppenderInnerFont } from './AppenderInnerFont';

interface SectionAppenderProps {
  isInitialSection: boolean;
  onClick: () => void;
}

export const SectionAppender: React.FC<SectionAppenderProps> = ({ isInitialSection, onClick }) => {
  const Wrapper = isInitialSection ? Box : React.Fragment;
  return (
    <Wrapper sx={{ px: '76px' }}>
      <ButtonBase
        onClick={onClick}
        sx={({ colors, borderRadii }) => ({
          typography: CLICK_TO_ADD_SECTION_LABLE,
          width: '100%',
          py: '24px',
          borderRadius: borderRadii.md,
          border: `1.2px dashed ${colors.black}`,
          backgroundColor: colors.veryLightGray,
          boxSizing: 'border-box',
        })}
      >
        <AppenderInnerFont
          label={CLICK_TO_ADD_SECTION_LABLE}
          variant="Horizontal"
        />
      </ButtonBase>
    </Wrapper>
  );
};
