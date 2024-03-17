import { Box, ButtonBase, SxProps } from '@mui/material';
import React from 'react';
import { CLICK_TO_ADD_SECTION_LABLE } from './strings';
import { AppenderInnerFont } from './AppenderInnerFont';

interface SectionAppenderProps {
  isInitialSection: boolean;
  onClick?: () => void;
  wrapperStyle?: SxProps;
}

export const SectionAppender: React.FC<SectionAppenderProps> = ({
  isInitialSection,
  onClick,
  wrapperStyle,
}) => {
  return (
    <Box sx={{ ...(!isInitialSection ? { px: '76px' } : {}), ...wrapperStyle }}>
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
    </Box>
  );
};
