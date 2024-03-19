import { Box } from '@mui/material';
import { CardWrapper } from '../../components/CardWrapper';
import { EditableTextContent } from '../../components/EditableContent/EditableTextContent';
import { Editor } from '../../components/Editor/Editor';
import { ImageUploader } from '../../components/ImageUploader/ImageUploader';
import { sectionProp } from '../types';
import React from 'react';

export const ExperienceSectionCard: React.FC<sectionProp> = ({ isEditable }) => {
  return (
    <CardWrapper
      direction="column"
      style={{ minWidth: '100%' }}
      isEditable={isEditable}
    >
      <Box
        sx={{
          ...(!isEditable
            ? {
                display: 'flex',
                alignItems: 'center',
                gap: '30px',
              }
            : {
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }),
          overflowX: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '26px',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <ImageUploader
            variant="md"
            isEditable={isEditable}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: isEditable ? 'column' : 'row',
              gap: isEditable ? '4px' : '6px',
            }}
          >
            <EditableTextContent
              variant="CompanyTitle"
              isEditable={isEditable}
            />
            <EditableTextContent
              variant="CompanyDesignation"
              isEditable={isEditable}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: isEditable ? '33px' : '',
          }}
        >
          <EditableTextContent
            variant="CompanyLocation"
            isEditable={isEditable}
            wrapperStyle={{
              maxWidth: {
                md: '90px',
              },
            }}
          />
          {!isEditable && (
            <Box
              sx={{
                padding: '0px 5px',
              }}
              dangerouslySetInnerHTML={{ __html: '&centerdot;' }}
            />
          )}
          <EditableTextContent
            variant="CompanyTimeLine"
            isEditable={isEditable}
            wrapperStyle={{
              maxWidth: {
                md: '90px',
              },
            }}
          />
        </Box>
      </Box>
      <Editor isEditable={isEditable} />
    </CardWrapper>
  );
};
