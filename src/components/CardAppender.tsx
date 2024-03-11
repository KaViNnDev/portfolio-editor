import { ButtonBase, SxProps } from '@mui/material';
import React, { useCallback } from 'react';
import { AppenderInnerFont } from './AppenderInnerFont';
import { AppenderInnerFontVariant } from './types';
import { ADD_NEXT_LABEL } from './strings';

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
      return '25px';
    case 'experience':
      return '15px';
  }
};

const getSkeletonPaddingY = (section: CardSections): string => {
  switch (section) {
    case 'skillset':
      return '244px';
    case 'project':
      return '88px';
    case 'experience':
      return '20px';
    case 'blog':
      return '83px';
  }
};

const getSkeletonPaddingX = (section: CardSections): string => {
  switch (section) {
    case 'skillset':
    case 'project':
      return '133px';
    case 'experience':
      return '331px';
    case 'blog':
      return '150px';
  }
};

export const CardAppender: React.FC<CardAppenderProp> = ({ onClick, section }) => {
  const getStyles = useCallback((): SxProps => {
    const borderRadius = getBroderValue(section);
    const py = getSkeletonPaddingY(section);
    const px = getSkeletonPaddingX(section);
    return {
      backgroundColor: '#EEEEEE',
      border: '1px solid #DADADA',
      borderRadius,
      py,
      px,
    };
  }, [section]);
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
