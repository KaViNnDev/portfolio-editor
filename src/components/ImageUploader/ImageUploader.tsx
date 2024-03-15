import { Box } from '@mui/material';
import React from 'react';
import { ImageUploadeVariants } from '../../Theme/types';
import { ImagePlaceholder } from './ImagePlaceholder';
import { useImageUploader } from './useImageUploader';
import { IMAGE_UPLOADER_ID } from '../contants';

interface ImageUploaderProps {
  variant: ImageUploadeVariants;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ variant }) => {
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
          id={IMAGE_UPLOADER_ID}
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
        })}
      >
        {image !== null ? (
          <img
            alt="preview"
            src={String(image)}
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <ImagePlaceholder variant={variant} />
        )}
      </Box>
    </>
  );
};
