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
import { useDispatch, useSelector } from '../../Store/helper';
import { addSection, selectFilteredActions, selectSections } from '../../Store/sectionsSlice';

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

interface SectionListProp {
  isMenuList: boolean;
  handleClose: () => void;
}

export const SectionList: React.FC<SectionListProp> = ({ isMenuList, handleClose }) => {
  const MenuSizeVariant: sizing = isMenuList ? 'sm' : 'md';
  const sections = useSelector(isMenuList ? selectSections : selectFilteredActions);
  const dispatch = useDispatch();
  return (
    <ElevatedContainer size={MenuSizeVariant}>
      <List size={MenuSizeVariant}>
        {sections.map(({ label, type }, index) => {
          const handleClick = () => {
            dispatch(addSection(type));
            handleClose();
          };
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
