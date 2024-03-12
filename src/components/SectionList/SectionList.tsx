import React from 'react';
import { ElevatedContainer } from './ElevatedContainer';
import {
  List as MuiList,
  ListItemButton,
  ListItemButtonProps,
  ListItemIcon,
  ListItemIconProps,
  ListItemText,
  ListProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { BodyFont } from '../typograpies';
import { AddCircleRounded } from '../../Icons/AddCircleRounded';
import { sizing } from '../../Theme/types';

interface MenuListSize {
  size: sizing;
}

const List = styled(MuiList)<ListProps & MenuListSize>(({ size }) => {
  const paddingVertical = size === 'md' ? '26px' : '23px';
  const paddingHorizontal = size === 'md' ? '15px' : '13px';
  return {
    padding: `${paddingVertical} ${paddingHorizontal}`,
    boxSizing: 'border-box',
    width: '100%',
  };
});

const ListItem = styled(ListItemButton)<ListItemButtonProps & MenuListSize>(({ theme, size }) => {
  const paddingVertical = size === 'md' ? '12px' : '10px';
  const paddingHorizontal = size === 'md' ? '19px' : '22px';
  return {
    borderRadius: theme.borderRadii.xs,
    '&:hover': {
      backgroungColor: theme.colors.veryLightGray,
    },
    padding: `${paddingVertical} ${paddingHorizontal}`,
    margin: '0px',
  };
});

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
  const MenuSizeVariant: sizing = isMenuList ? 'sm' : 'md';
  return (
    <ElevatedContainer size={MenuSizeVariant}>
      <List size={MenuSizeVariant}>
        {Sections.map(({ handleClick, label }, index) => {
          return (
            <ListItem
              key={`${index}_${label}`}
              onClick={handleClick}
              size={MenuSizeVariant}
            >
              {!isMenuList && (
                <ListIcon>
                  <AddCircleRounded />
                </ListIcon>
              )}
              <ListItemText sx={{ margin: '0px' }}>
                <BodyFont>{label}</BodyFont>
              </ListItemText>
            </ListItem>
          );
        })}
      </List>
    </ElevatedContainer>
  );
};
