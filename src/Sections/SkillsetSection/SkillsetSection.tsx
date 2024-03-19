import React from 'react';
import { sectionProp } from '../types';
import { Box } from '@mui/material';
import { CardAppender } from '../../components/AddNewSection/CardAppender';
import { SkillsetCard } from './Skillset.card';
import { useSkillsetSection } from '../hooks/useSkillsection';
import { useScrollBarStyles } from '../../Hooks/useScrollBarStyles';

export const SkillsetSection: React.FC<sectionProp> = ({ isEditable }) => {
  const { addNewCard, cards } = useSkillsetSection();
  const scrollbarStyles = useScrollBarStyles();
  return (
    <Box
      sx={{
        display: 'flex',
        minWidth: { md: '100%' },
        flexDirection: {
          xs: isEditable ? 'row' : 'column',
          md: 'row',
        },
        minHeight: '100%',
        flex: 1,
        gap: '20px',
        overflowX: 'auto',
        ...scrollbarStyles,
      }}
    >
      {Array(cards)
        .fill(0)
        .map(() => (
          <SkillsetCard isEditable={isEditable} />
        ))}
      {isEditable === true && (
        <CardAppender
          section="skillset"
          onClick={addNewCard}
        />
      )}
    </Box>
  );
};
