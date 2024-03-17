import { Box } from '@mui/material';
import React from 'react';
import { ImageUploader } from '../components/ImageUploader/ImageUploader';
import { EditableTextContent } from '../components/EditableContent/EditableTextContent';

export const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        paddingTop: {
          md: '3vw',
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <ImageUploader variant="lg" />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <EditableTextContent
            isEditable
            variant="HeroName"
          />
          <EditableTextContent
            isEditable
            variant="HeroEmail"
          />
        </Box>
      </Box>
    </Box>
  );
};
