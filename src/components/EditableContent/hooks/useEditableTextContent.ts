import { SxProps, Theme } from '@mui/material';
import React, { useRef, useState } from 'react';
import { EDITABLE_TEXT_NODE_PLACEHOLDERS } from '../strings';
import { EditableTextNodeVariants, EditableTextTypographies } from '../../../Theme/types';
import { Colors } from '../../../Theme/colors';

interface UseEditableTextContent {
  elementRef: React.RefObject<HTMLDivElement>;
  changeHandler: (_event: React.ChangeEvent<HTMLDivElement>) => void;
  WrapperSxHandler: (_props: EditableTextTypographies) => SxProps<Theme>;
  EditableSxHandler: (_props: EditableTextTypographies) => SxProps<Theme>;
}

export const useEditableTextContent = (
  variant: EditableTextNodeVariants
): UseEditableTextContent => {
  const [isContentExceedsWidth, setIsContentExceedsWidth] = useState<boolean>(false);
  const contentElement = useRef<HTMLDivElement>(null);

  //eslint-disable-next-line
  const changeHandler = (_event: React.ChangeEvent<HTMLDivElement>): void => {
    const scrollWidth = contentElement.current?.scrollWidth;
    const clientWidth = contentElement.current?.clientWidth;
    if (scrollWidth === undefined || clientWidth === undefined) return;
    const isContentExceeds = scrollWidth > clientWidth;
    setIsContentExceedsWidth(isContentExceeds);
  };
  const WrapperSxHandler = (typographyTheme: EditableTextTypographies): SxProps<Theme> => {
    const style = typographyTheme[variant].style;
    const colorKey = typographyTheme[variant].color.Placeholder;
    return {
      width: '100%',
      overflowX: isContentExceedsWidth ? 'scroll' : 'hidden',
      overflowY: 'hidden',
      boxSizing: 'border-box',
      textWrap: 'nowrap',
      '& > div:empty:before': {
        content: `"${EDITABLE_TEXT_NODE_PLACEHOLDERS[variant]}"`,
        ...style,
        color: Colors[colorKey],
      },
      '& > div': {
        margin: '0px',
        cursor: 'text',
        outline: 'none',
        border: 'none',
      },
    };
  };
  const EditableSxHandler = (typographyTheme: EditableTextTypographies): SxProps<Theme> => {
    const style = typographyTheme[variant].style;
    const colorKey = typographyTheme[variant].color.Text;
    return {
      ...style,
      color: Colors[colorKey],
    };
  };
  return {
    changeHandler,
    EditableSxHandler,
    WrapperSxHandler,
    elementRef: contentElement,
  };
};
