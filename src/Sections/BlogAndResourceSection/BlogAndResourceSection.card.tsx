import { Box } from '@mui/material';
import { CardWrapper } from '../../components/CardWrapper';
import { EditableLinkContent } from '../../components/EditableContent/EditableLinkContent';
import { EditableTextContent } from '../../components/EditableContent/EditableTextContent';
import { ImageUploader } from '../../components/ImageUploader/ImageUploader';
import { sectionProp } from '../types';

export const BlogAndResourceSectionCard: React.FC<sectionProp> = ({ isEditable }) => {
  return (
    <CardWrapper
      direction="column"
      isEditable={isEditable}
    >
      <ImageUploader
        variant="md"
        isEditable={isEditable}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        <EditableTextContent
          variant="BlogTitle"
          isEditable={isEditable}
        />
        <EditableLinkContent
          variant="Link"
          isEditable={isEditable}
        />
      </Box>
    </CardWrapper>
  );
};
