import React from 'react';
import { sectionProp } from '../types';
import { CardsContainer } from '../../components/CardsContainer';
import { useSection } from '../hooks/useSection';
import { ExperienceSectionCard } from './ExperienceSection.card';
import { CardAppender } from '../../components/AddNewSection/CardAppender';
import { EditableTextContent } from '../../components/EditableContent/EditableTextContent';
import { useSelector } from '../../Store/helper';
import { selectSection } from '../../Store/sectionsSlice';
import { Box } from '@mui/material';

export const ExperienceSection: React.FC<sectionProp> = ({ isEditable }) => {
  const { addNewCard, cards } = useSection();
  const experienceTitle = useSelector((state) => selectSection(state, 'experience'))?.title;
  return (
    <Box
      sx={{
        display: {
          xs: 'none',
          md: 'flex',
        },
        flexDirection: 'column',
        maxWidth: '100%',
        maxHeight: '100%',
        flex: 1,
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
          value={experienceTitle}
        />
        <EditableTextContent
          isEditable={isEditable}
          variant={'SectionSubText'}
        />
      </Box>
      <CardsContainer
        isEditable={isEditable}
        direction="column"
        sectionType="experience"
      >
        {Array(cards)
          .fill(0)
          .map(() => (
            <ExperienceSectionCard isEditable={isEditable} />
          ))}
        {isEditable === true && (
          <CardAppender
            section="experience"
            onClick={addNewCard}
          />
        )}
      </CardsContainer>
    </Box>
  );
};
