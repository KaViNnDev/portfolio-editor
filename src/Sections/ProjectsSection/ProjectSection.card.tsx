import { CardWrapper } from '../../components/CardWrapper';
import { EditableLinkContent } from '../../components/EditableContent/EditableLinkContent';
import { EditableTextContent } from '../../components/EditableContent/EditableTextContent';
import { Editor } from '../../components/Editor/Editor';
import { ImageUploader } from '../../components/ImageUploader/ImageUploader';
import { sectionProp } from '../types';

export const ProjectSectionCard: React.FC<sectionProp> = ({ isEditable }) => {
  return (
    <CardWrapper
      direction="column"
      isEditable={isEditable}
    >
      <ImageUploader
        variant="md"
        isEditable={isEditable}
      />
      <EditableTextContent
        variant="ProjectTitle"
        isEditable={isEditable}
      />
      <EditableLinkContent
        variant="Link"
        isEditable={isEditable}
      />
      <Editor isEditable={isEditable} />
    </CardWrapper>
  );
};
