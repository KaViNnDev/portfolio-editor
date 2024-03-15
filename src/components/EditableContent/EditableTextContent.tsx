import { Box } from '@mui/material';
import React from 'react';
import { EditableTextNodeVariants } from '../../Theme/types';
import { useEditableTextContent } from './hooks/useEditableTextContent';
interface EditableContentProps {
  isEditable: boolean;
  variant: EditableTextNodeVariants;
}
export const EditableTextContent: React.FC<EditableContentProps> = ({ isEditable, variant }) => {
  const { EditableSxHandler, WrapperSxHandler, changeHandler, elementRef } =
    useEditableTextContent(variant);
  return (
    <Box
      component={'div'}
      sx={({ EditableTypographies }) => {
        const placeHolderStyle = EditableTypographies.Text[variant].style;
        const placeholderColorKey = EditableTypographies.Text[variant].color.Placeholder;
        const styles = WrapperSxHandler({ style: placeHolderStyle, colorKey: placeholderColorKey });
        return {
          ...styles,
        };
      }}
    >
      <Box
        sx={({ EditableTypographies }) => {
          const contentStyle = EditableTypographies.Text[variant].style;
          const contentColorKey = EditableTypographies.Text[variant].color.Text;
          const styles = EditableSxHandler({ style: contentStyle, colorKey: contentColorKey });
          return {
            ...styles,
          };
        }}
        component={'div'}
        contentEditable={isEditable}
        ref={elementRef}
        onInput={changeHandler}
      ></Box>
    </Box>
  );
};
