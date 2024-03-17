import React from 'react';
import { EditableTextContent } from '../components/EditableContent/EditableTextContent';
import { Box } from '@mui/material';

export const TitleSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <EditableTextContent
        variant="Title"
        isEditable
      />
      <EditableTextContent
        variant="SubTitle"
        isEditable
      />
    </Box>
  );
};
