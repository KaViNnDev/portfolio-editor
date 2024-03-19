import { SxProps, Theme } from '@mui/material';
import React, { useRef, useState } from 'react';
import { EDITABLE_TEXT_NODE_PLACEHOLDERS } from '../strings';
import { EditableTextNodeVariants, EditableTextTypographies } from '../../../Theme/types';
import { Colors } from '../../../Theme/colors';
import { useScrollBarStyles } from '../../../Hooks/useScrollBarStyles';

interface useEditableTextContentProp {
  variant: EditableTextNodeVariants;
  onChange?: (val: string) => void;
  value?: string;
}

interface UseEditableTextContent {
  elementRef: React.RefObject<HTMLDivElement>;
  changeHandler: (_event: React.ChangeEvent<HTMLDivElement>) => void;
  WrapperSxHandler: (_props: EditableTextTypographies) => SxProps<Theme>;
  EditableSxHandler: (_props: EditableTextTypographies) => SxProps<Theme>;
  content: string;
  blurHandler: (_event: React.FocusEvent<HTMLDivElement, Element>) => void;
}

export const useEditableTextContent = ({
  variant,
  onChange,
  value,
}: useEditableTextContentProp): UseEditableTextContent => {
  const [isContentExceedsWidth, setIsContentExceedsWidth] = useState<boolean>(false);
  const [content, setContent] = useState<string>(value ?? '');
  const contentElement = useRef<HTMLDivElement>(null);
  const scrollbarStyles = useScrollBarStyles();

  //eslint-disable-next-line
  const changeHandler = (_event: React.FormEvent<HTMLDivElement>): void => {
    const scrollWidth = contentElement.current?.scrollWidth;
    const clientWidth = contentElement.current?.clientWidth;
    const textValue = contentElement.current?.innerText;
    if (onChange !== undefined) onChange(textValue ?? '');
    if (scrollWidth === undefined || clientWidth === undefined) return;
    const isContentExceeds = scrollWidth > clientWidth;
    setIsContentExceedsWidth(isContentExceeds);
  };

  const getHeight = (lineHeight?: string | number): string | undefined => {
    //Since given line-heign doesn't satisfies cap values of the font, adding best suited value.
    const RANDOM_CAP_VALUE = 6;
    if (typeof lineHeight === 'number') {
      return lineHeight + RANDOM_CAP_VALUE + 'px';
    }
    if (typeof lineHeight === 'string') {
      const lineHeightValue = lineHeight?.match(/(\d+)/)?.[0];
      if (typeof lineHeightValue === 'number' || lineHeightValue !== undefined)
        return Number(lineHeightValue) + RANDOM_CAP_VALUE + 'px';
    }
  };

  const blurHandler = (event: React.FocusEvent<HTMLDivElement, Element>) => {
    setContent(event.target.innerHTML);
  };

  const WrapperSxHandler = (typographyTheme: EditableTextTypographies): SxProps<Theme> => {
    const style = typographyTheme[variant].style;
    const colorKey = typographyTheme[variant].color.Placeholder;
    const canWrapText =
      variant === 'SectionSubText' || variant === 'SkillSetDescription' || variant === 'BlogTitle';
    return {
      width: '100%',
      overflowX: isContentExceedsWidth ? 'scroll' : 'hidden',
      overflowY: canWrapText ? 'hidden' : undefined,
      boxSizing: 'border-box',
      textWrap: canWrapText ? 'wrap' : 'nowrap',
      '& > div:empty:before': {
        content: `"${EDITABLE_TEXT_NODE_PLACEHOLDERS[variant]}"`,
        ...style,
        color: Colors[colorKey],
        ...(variant === 'SiteTitle' ? { fontWeight: '500' } : {}),
      },
      '& > div': {
        margin: '0px',
        cursor: 'text',
        outline: 'none',
        border: 'none',
      },
      minHeight: getHeight(style.lineHeight),
      ...scrollbarStyles,
    };
  };
  const EditableSxHandler = (typographyTheme: EditableTextTypographies): SxProps<Theme> => {
    const style = typographyTheme[variant].style;
    const colorKey = typographyTheme[variant].color.Text;
    return {
      ...style,
      color: Colors[colorKey],
      ...(variant === 'SiteTitle' ? { fontWeight: '600' } : {}),
    };
  };
  return {
    changeHandler,
    EditableSxHandler,
    WrapperSxHandler,
    elementRef: contentElement,
    blurHandler,
    content,
  };
};
