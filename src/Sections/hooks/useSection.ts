import { useState } from 'react';

interface UseSection {
  cards: number;
  addNewCard: () => void;
}

export const useSection = (): UseSection => {
  const [cards, setCards] = useState(1);
  const addNewCard = () => {
    setCards((prevState) => prevState + 1);
  };
  return {
    addNewCard,
    cards,
  };
};
