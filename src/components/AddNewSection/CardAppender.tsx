import { ButtonBase, SxProps, useTheme } from '@mui/material';
import React, { useCallback } from 'react';
import { AppenderInnerFont } from './AppenderInnerFont';
import { AppenderInnerFontVariant } from '../types';
import { ADD_NEXT_LABEL } from './strings';
import { borderRadius } from '../../Theme/theme';

type CardSections = 'skillset' | 'project' | 'experience' | 'blog';
interface CardAppenderProp {
  onClick: () => void;
  section: CardSections;
}

const getBroderValue = (section: CardSections): string => {
  switch (section) {
    case 'skillset':
    case 'project':
    case 'blog':
      return borderRadius.xl;
    case 'experience':
      return borderRadius.sm;
  }
};

const getWidth = (section: CardSections): string => {
  switch (section) {
    case 'skillset':
    case 'project':
    case 'blog':
      return '359px';
    case 'experience':
      return '100%';
  }
};

export const CardAppender: React.FC<CardAppenderProp> = ({ onClick, section }) => {
  const { colors } = useTheme();
  const getStyles = useCallback((): SxProps => {
    const borderRadius = getBroderValue(section);
    const width = getWidth(section);
    return {
      backgroundColor: colors.lightGrey,
      border: `1px solid ${colors.silver}`,
      borderRadius,
      minWidth: {
        xs: '100%',
        md: width,
      },
      flex: 1,
      flexShrink: 0,
      padding: '41px 37px',
      maxHeight: section === 'experience' ? '64px' : '',
    };
  }, [colors.lightGrey, colors.silver, section]);
  const getInnerTextVariant = useCallback((): AppenderInnerFontVariant => {
    switch (section) {
      case 'skillset':
      case 'blog':
      case 'project':
        return 'Vertical';
      case 'experience':
        return 'Horizontal';
    }
  }, [section]);
  return (
    <ButtonBase
      sx={{ ...getStyles() }}
      onClick={onClick}
    >
      <AppenderInnerFont
        label={ADD_NEXT_LABEL}
        variant={getInnerTextVariant()}
      />
    </ButtonBase>
  );
};
