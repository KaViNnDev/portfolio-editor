import { Box, ButtonBase } from '@mui/material';
import React from 'react';
import Logo from './../../assets/Logo.png';
import { NavFont } from '../typograpies';
import { NAV_PREVIEW_LABEL, TITLE } from './strings';
import { SectionMenuButton } from './SectionMenuButton';
import { NavStack } from './NavStack';
import { useDispatch } from '../../Store/helper';
import { setPreviewMode } from '../../Store/modeSlice';
import { useEditMode } from '../../Hooks/useEditMode';

export const NavBar: React.FC = () => {
  const dispatch = useDispatch();
  const previewClickHandler = () => {
    dispatch(setPreviewMode());
  };
  const isEditMode = useEditMode();
  return (
    <Box
      component={'nav'}
      sx={({ colors, zIndex }) => ({
        py: '12px',
        backgroundColor: colors.nearBlack,
        width: '100%',
        boxShadow: `0px 6px 25px 0px ${colors.semiTransparentBlack}`,
        position: 'sticky',
        top: 0,
        zIndex: zIndex.appBar,
      })}
    >
      <NavStack
        sx={{
          paddingLeft: {
            xs: '10px',
            md: '35px',
          },
          paddingRight: {
            xs: '10px',
            md: '63px',
          },
        }}
      >
        <NavStack
          gap={{
            xs: '20px',
            md: '64px',
          }}
        >
          <NavStack gap={'8px'}>
            <img
              src={Logo}
              alt="Logo"
              width={'30px'}
              height={'13.64px'}
            />
            <NavFont
              sx={{
                textWrap: 'nowrap',
              }}
            >
              {TITLE}
            </NavFont>
          </NavStack>
          <SectionMenuButton />
        </NavStack>
        <ButtonBase
          disableRipple
          disableTouchRipple
          onClick={previewClickHandler}
          disabled={!isEditMode}
        >
          <NavFont>{NAV_PREVIEW_LABEL}</NavFont>
        </ButtonBase>
      </NavStack>
    </Box>
  );
};
