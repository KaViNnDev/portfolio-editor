import React from 'react';
import { EditableTextContent } from '../components/EditableContent/EditableTextContent';
import { useSelector } from '../Store/helper';
import { selectSection } from '../Store/sectionsSlice';
import { Editor } from '../components/Editor/Editor';
import { sectionProp } from './types';

export const AboutMeSection: React.FC<sectionProp> = ({ isEditable }) => {
  const sectionTitle = useSelector((state) => selectSection(state, 'aboutYou'))?.title;
  return (
    <>
      <EditableTextContent
        isEditable={isEditable}
        variant="SectionTitle"
        value={sectionTitle}
      />
      <Editor
        wrapperStyle={{
          marginTop: '45px',
        }}
        isEditable={isEditable}
        shouldAutoFocus={true}
      />
    </>
  );
};
