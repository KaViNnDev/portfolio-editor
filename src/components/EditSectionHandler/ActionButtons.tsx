import { Box } from '@mui/material';
import { ActionIcon } from './ActionIcon';
import { Sections, removeSection } from '../../Store/sectionsSlice';
import { useDispatch } from '../../Store/helper';

interface ActionButtonsProps {
  editHandler?: () => void;
  sectionType: Sections;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ sectionType, editHandler }) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(removeSection(sectionType));
  };
  return (
    <Box
      sx={{
        py: '18px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      className="toolbar"
    >
      <ActionIcon iconVaraiant="Hamburger" />
      <Box
        sx={{
          display: 'flex',
          gap: '9.5px',
        }}
      >
        <ActionIcon
          iconVaraiant="Delete"
          onClick={deleteHandler}
        />
        <ActionIcon
          iconVaraiant="Edit"
          onClick={editHandler}
        />
      </Box>
    </Box>
  );
};
