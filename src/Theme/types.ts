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
}

export type sizing = 'md' | 'sm';

export type SectionsListWidth = Record<sizing, string>;
