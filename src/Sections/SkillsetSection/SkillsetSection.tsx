import React from 'react';
import { sectionProp } from '../types';
import { CardAppender } from '../../components/AddNewSection/CardAppender';
import { SkillsetCard } from './Skillset.card';
import { useSection } from '../hooks/useSection';
import { CardsContainer } from '../../components/CardsContainer';

export const SkillsetSection: React.FC<sectionProp> = ({ isEditable }) => {
  const { addNewCard, cards } = useSection();
  return (
    <CardsContainer isEditable={isEditable}>
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
    </CardsContainer>
  );
};
