import React from 'react';
import { CardWrapper } from '../../components/CardWrapper';
import { EditableTextContent } from '../../components/EditableContent/EditableTextContent';
import { Editor } from '../../components/Editor/Editor';
import { Box } from '@mui/material';
import { sectionProp } from '../types';

export const SkillsetCard: React.FC<sectionProp> = ({ isEditable }) => {
  return (
    <CardWrapper
      direction="column"
      styles={{
        gap: '23px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minWidth: {
            xs: '100%',
            md: '359px',
          },
          gap: '12px',
        }}
      >
        <EditableTextContent
          variant="SkillSetTitle"
          isEditable={isEditable}
        />
        <EditableTextContent
          variant="SkillSetDescription"
          isEditable={isEditable}
        />
      </Box>
      <Editor isEditable={isEditable} />
    </CardWrapper>
  );
};
