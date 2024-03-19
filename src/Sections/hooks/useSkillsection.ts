import { useState } from 'react';

interface UseSkillsetSection {
  cards: number;
  addNewCard: () => void;
}

export const useSkillsetSection = (): UseSkillsetSection => {
  const [cards, setCards] = useState(1);
  const addNewCard = () => {
    setCards((prevState) => prevState + 1);
  };
  return {
    addNewCard,
    cards,
  };
};
