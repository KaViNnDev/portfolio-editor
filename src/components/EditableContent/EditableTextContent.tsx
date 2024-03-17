import { Box } from '@mui/material';
import React from 'react';
import { EditableTextNodeVariants } from '../../Theme/types';
import { useEditableTextContent } from './hooks/useEditableTextContent';
interface EditableTextContentProps {
  isEditable: boolean;
  variant: EditableTextNodeVariants;
  onChange?: (val: string) => void;
}
export const EditableTextContent: React.FC<EditableTextContentProps> = ({
  isEditable,
  variant,
  onChange,
}) => {
  const { EditableSxHandler, WrapperSxHandler, changeHandler, elementRef } = useEditableTextContent(
    { variant, onChange }
  );
  return (
    <Box
      component={'div'}
      sx={({ EditableTypographies: { Text } }) => ({
        ...WrapperSxHandler(Text),
      })}
    >
      <Box
        sx={({ EditableTypographies: { Text } }) => ({
          ...EditableSxHandler(Text),
        })}
        component={'div'}
        contentEditable={isEditable}
        ref={elementRef}
        onInput={changeHandler}
      ></Box>
    </Box>
  );
};
