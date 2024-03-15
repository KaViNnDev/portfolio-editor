import { Box, useTheme } from '@mui/material';
import { ImageUploadeVariants } from '../../Theme/types';
import { Icons } from '../../Icons/Icons';
import { IMAGE_UPLOADER_ID } from '../contants';

interface ImagePlaceholderProps {
  variant: ImageUploadeVariants;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ variant }) => {
  const { ImageUploaderBreakPoints } = useTheme();
  return (
    <label
      htmlFor={IMAGE_UPLOADER_ID}
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
