import { SxProps, Theme } from '@mui/material';
import React, { useRef, useState } from 'react';
import { EDITABLE_LINK_NODE_PLACEHOLDERS } from '../strings';
import { EditableLinkTypographies, EditableLinkVariants } from '../../../Theme/types';
import { Colors } from '../../../Theme/colors';

interface UseEditableLinkContent {
  elementRef: React.RefObject<HTMLDivElement>;
  changeHandler: (_event: React.ChangeEvent<HTMLDivElement>) => void;
  WrapperSxHandler: (_props: EditableLinkTypographies) => SxProps<Theme>;
  EditableSxHandler: (_props: EditableLinkTypographies) => SxProps<Theme>;
  openLink: () => void;
}

export const useEditableLinkContent = (variant: EditableLinkVariants): UseEditableLinkContent => {
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
  const WrapperSxHandler = (typographyTheme: EditableLinkTypographies): SxProps<Theme> => {
    const style = typographyTheme[variant].style;
    const colorKey = typographyTheme[variant].color.Placeholder;
    return {
      width: 'fit-content',
      overflowX: isContentExceedsWidth ? 'scroll' : 'hidden',
      overflowY: 'hidden',
      boxSizing: 'border-box',
      textWrap: 'nowrap',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '4px',
      '& > span:empty:before': {
        content: `"${EDITABLE_LINK_NODE_PLACEHOLDERS[variant]}"`,
        ...style,
        color: Colors[colorKey],
      },
      '& > span': {
        margin: '0px',
        cursor: 'text',
        outline: 'none',
        border: 'none',
      },
      '& > span.link': {
        cursor: 'pointer',
      },
    };
  };
  const EditableSxHandler = (typographyTheme: EditableLinkTypographies): SxProps<Theme> => {
    const style = typographyTheme[variant].style;
    const colorKey = typographyTheme[variant].color.Text;
    return {
      ...style,
      color: Colors[colorKey],
    };
  };
  const openLink = (): void => {
    const LINK = contentElement.current?.textContent?.toLowerCase();
    if (typeof LINK === 'string' && LINK !== '')
      window.open(`https://${LINK}`, variant === 'ConnectLink' ? '_blank' : '_self', 'noopener');
  };
  return {
    changeHandler,
    EditableSxHandler,
    WrapperSxHandler,
    elementRef: contentElement,
    openLink,
  };
};
