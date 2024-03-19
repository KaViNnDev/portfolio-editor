import React from 'react';
import { sectionProp } from '../types';
import { Box } from '@mui/material';
import { EditableTextContent } from '../../components/EditableContent/EditableTextContent';
import { ImageUploader } from '../../components/ImageUploader/ImageUploader';
import { EditableLinkContent } from '../../components/EditableContent/EditableLinkContent';

export const LetsConnectSection: React.FC<sectionProp> = ({ isEditable }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        maxHeight: '100%',
        gap: {
          xs: '32px',
          md: '34px',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: {
            xs: '15px',
            md: '22px',
          },
        }}
      >
        <EditableTextContent
          variant="SectionTitle"
          isEditable={isEditable}
        />
        <EditableTextContent
          variant="SubTitle"
          isEditable={isEditable}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: {
            xs: '31px',
            md: '19px',
          },
        }}
      >
        <ImageUploader
          variant="md"
          isEditable={isEditable}
        />
        <EditableLinkContent
          variant="ConnectLink"
          isEditable={isEditable}
        />
      </Box>
    </Box>
  );
};
