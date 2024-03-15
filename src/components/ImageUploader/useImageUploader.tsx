import { useCallback, useState } from 'react';

interface ImageUploader {
  image: string | ArrayBuffer | null;
  handleUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useImageUploader = (): ImageUploader => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const handleUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      if (image !== null) return;
      const file = event?.target?.files?.[0];
      if (file !== undefined) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setImage(reader.result);
        };
      }
    },
    [image]
  );

  return {
    image,
    handleUpload,
  };
};
