import React from 'react';
import { CardWrapper } from '../../components/CardWrapper';
import { EditableTextContent } from '../../components/EditableContent/EditableTextContent';
import { Editor } from '../../components/Editor/Editor';
import { Box } from '@mui/material';
import { sectionProp } from '../types';

export const SkillsetCard: React.FC<sectionProp> = ({ isEditable }) => {
  return (
    <CardWrapper direction="column">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
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
