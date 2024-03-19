import { Box, useTheme } from '@mui/material';
import { ImageUploadeVariants } from '../../Theme/types';
import { Icons } from '../../Icons/Icons';
import { useEditMode } from '../../Hooks/useEditMode';

interface ImagePlaceholderProps {
  variant: ImageUploadeVariants;
  formId: string;
  isEditable: boolean;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  variant,
  formId,
  isEditable,
}) => {
  const { ImageUploaderBreakPoints } = useTheme();
  const isEditMode = useEditMode();
  return (
    <label
      htmlFor={isEditMode && isEditable ? formId : undefined}
      style={{ width: '100%', height: '100%' }}
    >
      <Box
        component={'div'}
        sx={({ colors }) => ({
          width: '100%',
          height: '100%',
          flex: 1,
          backgroundColor: colors.veryLightGray,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        })}
      >
        <Icons
          variant="ImagePlaceholder"
          width={ImageUploaderBreakPoints[variant].placeholder}
        />
      </Box>
    </label>
  );
};
