export interface colors {
  lightGrey: string;
  silver: string;
  black: string;
  veryLightGray: string;
  lightGrayish: string;
  transparenntBlack: string;
  white: string;
}

export interface borderRadii {
  full: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export type sizing = 'md' | 'sm';

export type SectionsListWidth = Record<sizing, string>;
