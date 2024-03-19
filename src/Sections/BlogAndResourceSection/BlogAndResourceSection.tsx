import React from 'react';
import { sectionProp } from '../types';
import { CardsContainer } from '../../components/CardsContainer';
import { useSection } from '../hooks/useSection';
import { BlogAndResourceSectionCard } from './BlogAndResourceSection.card';
import { CardAppender } from '../../components/AddNewSection/CardAppender';
import { EditableTextContent } from '../../components/EditableContent/EditableTextContent';
import { useSelector } from '../../Store/helper';
import { selectSection } from '../../Store/sectionsSlice';
import { Box } from '@mui/material';

export const BlogAndResourceSection: React.FC<sectionProp> = ({ isEditable }) => {
  const { addNewCard, cards } = useSection();
  const blogTitle = useSelector((state) => selectSection(state, 'blogsAndResources'))?.title;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        maxHeight: '100%',
        gap: {
          xs: '41px',
          md: '63px',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '100%',
          maxHeight: '100%',
          gap: {
            xs: '25px',
            md: '28px',
          },
        }}
      >
        <EditableTextContent
          isEditable={isEditable}
          variant="SectionTitle"
          value={blogTitle}
        />
        <EditableTextContent
          isEditable={isEditable}
          variant={'SectionSubText'}
        />
      </Box>
      <CardsContainer
        isEditable={isEditable}
        sectionType="blogsAndResources"
      >
        {Array(cards)
          .fill(0)
          .map(() => (
            <BlogAndResourceSectionCard isEditable={isEditable} />
          ))}
        {isEditable === true && (
          <CardAppender
            section="project"
            onClick={addNewCard}
          />
        )}
      </CardsContainer>
    </Box>
  );
};
