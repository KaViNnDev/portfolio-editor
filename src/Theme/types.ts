export interface colors {
  lightGrey: string;
  silver: string;
  black: string;
  veryLightGray: string;
  lightGrayish: string;
  transparentBlack: string;
  white: string;
  nearBlack: string;
  semiTransparentBlack: string;
  platinumGray: string;
  slateGray: string;
  silverGray: string;
}

export interface borderRadii {
  full: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  floatingMenuIcon: string;
  floatingMenuWrapper: string;
  imageUploader: Record<ImageUploadeVariants, string>;
}

export type sizing = 'md' | 'sm';

export type SectionsListWidth = Record<sizing, string>;

export type ImageUploadeVariants = 'sm' | 'md' | 'lg';

interface ImageUploaderBoxProperties {
  box: string;
  placeholder: string;
}

export type ImageUploaderWidth = Record<ImageUploadeVariants, ImageUploaderBoxProperties>;
