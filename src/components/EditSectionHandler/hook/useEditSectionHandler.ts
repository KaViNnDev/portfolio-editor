import { useState } from 'react';
import {
  Sections,
  selectActiveSections,
  selectRecentActiveSections,
  selectSections,
} from '../../../Store/sectionsSlice';
import { useEditMode } from '../../../Hooks/useEditMode';
import { useSelector } from 'react-redux';

interface useEditSectionHandlerProps {
  sectionType: Sections;
}

interface UseEditSectionHandler {
  isEditMode: boolean;
  onClickHandler: () => void;
  isEditable: boolean;
  isAllSectionAppended: boolean;
  isRecentActiveSection: boolean;
}

export const useEditSectionHandler = ({
  sectionType,
}: useEditSectionHandlerProps): UseEditSectionHandler => {
  const isEditMode = useEditMode();
  const recentActiveSection = useSelector(selectRecentActiveSections);
  const activeSections = useSelector(selectActiveSections);
  const sections = useSelector(selectSections);
  const isRecentActiveSection = recentActiveSection?.type === sectionType;
  const isAllSectionAppended = activeSections.length === sections.length && isRecentActiveSection;
  const [canEdit, setCanEdit] = useState<boolean>(true);
  const isEditable = isEditMode && canEdit;
  const onClickHandler = () => {
    setCanEdit(false);
  };
  return {
    isAllSectionAppended,
    isEditable,
    isEditMode,
    isRecentActiveSection,
    onClickHandler,
  };
};
