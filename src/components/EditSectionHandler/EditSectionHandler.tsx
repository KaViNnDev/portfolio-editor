import { Box } from '@mui/material';
import React from 'react';
import { SectionAppender } from '../AddNewSection/SectionAppender';
import { Sections } from '../../Store/sectionsSlice';
import { ActionButtons } from './ActionButtons';
import { AllSectionAddedFont } from '../typograpies';
import { ALL_SECTION_ADDED_LABEL } from './strings';
import { useEditSectionHandler } from './hook/useEditSectionHandler';

interface EditSectionHandlerProps {
  children: (isEditable: boolean) => React.ReactNode;
  sectionType: Sections;
}

export const EditSectionHandler: React.FC<EditSectionHandlerProps> = ({
  children,
  sectionType,
}) => {
  const { isAllSectionAppended, isEditMode, isEditable, isRecentActiveSection, onClickHandler } =
    useEditSectionHandler({ sectionType });
  return (
    <>
      <Box
        sx={({ colors, sectionHandlerBreakPoint }) => ({
          '& .toolbar': {
            visibility: 'hidden',
          },
          '& .container': {
            border: `1.2px solid transparent`,
            borderRadius: '16px',
            minHeight: isEditable ? sectionHandlerBreakPoint[sectionType] : undefined,
            textWrap: 'wrap',
            display: 'flex',
            flexDirection: {
              xs: isEditable ? '' : 'column',
              md: 'row',
            },
          },
          '&:hover .toolbar': {
            visibility: isEditMode ? 'visible' : 'hidden',
          },
          '&:hover .container': {
            border: `1.2px solid ${isEditMode ? colors.doveGray : 'tansparent'}`,
          },
        })}
      >
        <ActionButtons
          sectionType={sectionType}
          editHandler={onClickHandler}
        />
        <Box
          sx={{
            padding: {
              md: '35px',
            },
          }}
          className="container"
          id={sectionType}
        >
          {children(isEditable)}
        </Box>
      </Box>
      {isAllSectionAppended ? (
        <Box
          sx={{
            py: '24px',
            textAlign: 'center',
          }}
        >
          <AllSectionAddedFont>{ALL_SECTION_ADDED_LABEL}</AllSectionAddedFont>
        </Box>
      ) : isRecentActiveSection ? (
        <SectionAppender
          isInitialSection={false}
          wrapperStyle={{
            visibility: `${isEditMode ? 'visible' : 'hidden'}`,
          }}
        />
      ) : null}
    </>
  );
};
