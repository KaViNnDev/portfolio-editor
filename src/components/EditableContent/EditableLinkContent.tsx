import React from 'react';
import { EditableLinkVariants } from '../../Theme/types';
import { useEditableLinkContent } from './hooks/useEditableLinkContent';
import { Box } from '@mui/material';
import { Icons } from '../../Icons/Icons';

interface EditableLinkContentProps {
  isEditable: boolean;
  variant: EditableLinkVariants;
}

export const EditableLinkContent: React.FC<EditableLinkContentProps> = ({
  variant,
  isEditable,
}) => {
  const { EditableSxHandler, WrapperSxHandler, changeHandler, elementRef, openLink } =
    useEditableLinkContent(variant);
  return (
    <Box
      component={'span'}
      sx={({ EditableTypographies: { Link } }) => ({
        ...WrapperSxHandler(Link),
      })}
      onClick={isEditable === false ? openLink : undefined}
    >
      {isEditable === true && variant === 'Link' ? <Icons variant="Link" /> : null}
      <Box
        sx={({ EditableTypographies: { Link } }) => ({
          ...EditableSxHandler(Link),
        })}
        component={'span'}
        className={isEditable ? '' : 'link'}
        contentEditable={isEditable}
        ref={elementRef}
        onInput={changeHandler}
      ></Box>
      {isEditable === false && variant === 'ConnectLink' ? <Icons variant="NewTab" /> : null}
    </Box>
  );
};
