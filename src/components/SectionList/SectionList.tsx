import React from 'react';
import { ElevatedContainer } from './ElevatedContainer';
import {
  List,
  ListItemButton,
  ListItemButtonProps,
  ListItemIcon,
  ListItemIconProps,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { BodyFont } from '../typograpies';
import { AddCircleRounded } from '../../Icons/AddCircleRounded';

const ListItem = styled(ListItemButton)<ListItemButtonProps>(({ theme }) => ({
  borderRadius: theme.borderRadii.xs,
  '&:hover': {
    backgroungColor: theme.colors.veryLightGray,
  },
}));

const ListIcon = styled(ListItemIcon)<ListItemIconProps>({
  width: '21px',
  height: '21px',
  marginRight: '15px',
  minWidth: 'initial',
});

interface SectionsType {
  label: string;
  handleClick: () => void;
}

interface SectionListProp {
  isMenuList: boolean;
}

export const SectionList: React.FC<SectionListProp> = ({ isMenuList }) => {
  const Sections: SectionsType[] = [
    {
      label: '📌  Add About you',
      handleClick: () => {
        console.log('clicked');
      },
    },
    {
      label: '💡  Add Skillsets',
      handleClick: () => {
        console.log('clicked');
      },
    },
    {
      label: '🛠️  Add Projects',
      handleClick: () => {
        console.log('clicked');
      },
    },
    {
      label: '🌐  Add Experience',
      handleClick: () => {
        console.log('clicked');
      },
    },
    {
      label: '🔗  Add CTA',
      handleClick: () => {
        console.log('clicked');
      },
    },
  ];
  return (
    <ElevatedContainer size={isMenuList ? 'sm' : 'md'}>
      <List>
        {Sections.map(({ handleClick, label }) => {
          return (
            <ListItem onClick={handleClick}>
              {!isMenuList && (
                <ListIcon>
                  <AddCircleRounded />
                </ListIcon>
              )}
              <ListItemText>
                <BodyFont>{label}</BodyFont>
              </ListItemText>
            </ListItem>
          );
        })}
      </List>
    </ElevatedContainer>
  );
};
