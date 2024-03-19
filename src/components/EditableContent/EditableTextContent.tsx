import { Box, SxProps, Theme } from '@mui/material';
import React from 'react';
import { EditableTextNodeVariants } from '../../Theme/types';
import { useEditableTextContent } from './hooks/useEditableTextContent';
import { useEditMode } from '../../Hooks/useEditMode';
interface EditableTextContentProps {
  isEditable: boolean;
  variant: EditableTextNodeVariants;
  onChange?: (val: string) => void;
  value?: string;
  wrapperStyle?: SxProps<Theme>;
}
export const EditableTextContent: React.FC<EditableTextContentProps> = ({
  isEditable,
  variant,
  onChange,
  value,
  wrapperStyle,
}) => {
  const { EditableSxHandler, WrapperSxHandler, changeHandler, elementRef, content, blurHandler } =
    useEditableTextContent({ variant, onChange, value });
  const isEditMode = useEditMode();
  return (
    <Box
      component={'div'}
      sx={({ EditableTypographies: { Text } }) => ({
        ...WrapperSxHandler(Text),
        ...wrapperStyle,
      })}
    >
      <Box
        sx={({ EditableTypographies: { Text } }) => ({
          ...EditableSxHandler(Text),
        })}
        component={'div'}
        contentEditable={isEditable && isEditMode}
        ref={elementRef}
        onInput={changeHandler}
        onBlur={blurHandler}
        dangerouslySetInnerHTML={{ __html: content }}
      ></Box>
    </Box>
  );
};
