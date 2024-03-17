import { Box } from '@mui/material';
import React, { useState } from 'react';
import { ImageUploader } from '../ImageUploader/ImageUploader';
import { EditableTextContent } from '../EditableContent/EditableTextContent';
import { Helmet } from 'react-helmet';
import { DEFAULT_APP_TITLE } from '../constants';

export const SiteTitle: React.FC = () => {
  const [title, SetTitle] = useState<string>(DEFAULT_APP_TITLE);
  const onTitleChange = (title: string) => {
    SetTitle(title);
  };
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '12px',
          paddingBottom: {
            md: '3vw',
          },
        }}
      >
        <ImageUploader variant="sm" />
        <EditableTextContent
          variant="SiteTitle"
          isEditable
          onChange={onTitleChange}
        />
      </Box>
    </>
  );
};
