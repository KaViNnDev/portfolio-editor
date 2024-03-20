import { useCallback, useState } from 'react';

interface ImageUploader {
  image: string | ArrayBuffer | null;
  handleUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface UseImageUploader {
  shouldUpdateFavicon: boolean;
}

export const useImageUploader = ({ shouldUpdateFavicon }: UseImageUploader): ImageUploader => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const updateFavicon = useCallback((image: File) => {
    // Upload the image here and get the URL
    const imageUrl = URL.createObjectURL(image);

    // Set the URL as favicon
    const favicon: HTMLLinkElement | null =
      document.querySelector("link[rel*='icon']") ?? document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = imageUrl;
    document.head.appendChild(favicon);
  }, []);

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
        if (shouldUpdateFavicon) {
          updateFavicon(file);
        }
      }
    },
    [image, shouldUpdateFavicon, updateFavicon]
  );

  return {
    image,
    handleUpload,
  };
};
