import { Box } from '@mui/material';
import React, { useId } from 'react';
import { ImageUploadeVariants } from '../../Theme/types';
import { ImagePlaceholder } from './ImagePlaceholder';
import { useImageUploader } from './useImageUploader';

interface ImageUploaderProps {
  variant: ImageUploadeVariants;
  isEditable?: boolean;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ variant, isEditable }) => {
  const formId = useId();
  const { handleUpload, image } = useImageUploader();
  return (
    <>
      {image === null && (
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          aria-hidden="true"
          style={{
            display: 'none',
          }}
          id={formId}
        />
      )}
      <Box
        component={'div'}
        sx={({ ImageUploaderBreakPoints, borderRadii, colors }) => ({
          width: ImageUploaderBreakPoints[variant].box,
          height: ImageUploaderBreakPoints[variant].box,
          borderRadius: borderRadii.imageUploader[variant],
          backgroundColor: colors.veryLightGray,
          border: `1px slid ${colors.silverGray}`,
          display: 'flex',
          overflow: 'hidden',
          borderWidth: '1px',
          borderStyle: 'dashed',
          borderColor: colors.silverGray,
        })}
      >
        {image !== null ? (
          <img
            alt="preview"
            src={String(image)}
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <ImagePlaceholder
            variant={variant}
            formId={formId}
            isEditable={isEditable ?? true}
          />
        )}
      </Box>
    </>
  );
};
