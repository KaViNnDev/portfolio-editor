import { CSSProperties } from 'react';
import { Sections } from '../Store/sectionsSlice';

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
  lightSilver: string;
  mediumGray: string;
  warmGray: string;
  charcoalGray: string;
  ashGray: string;
  electricBlue: string;
  steelGray: string;
  softGray: string;
  doveGray: string;
  skyBlue: string;
  lightSlateGray: string;
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

export type EditableContentVariants =
  | 'SiteTitle'
  | 'Title'
  | 'SubTitle'
  | 'HeroName'
  | 'HeroEmail'
  | 'SkillSetTitle'
  | 'SkillSetDescription'
  | 'SectionTitle'
  | 'SectionSubText'
  | 'ProjectTitle'
  | 'Link'
  | 'ProjectDescription'
  | 'CompanyTitle'
  | 'CompanyDesignation'
  | 'CompanyLocation'
  | 'CompanyTimeLine'
  | 'CompanyExperience'
  | 'BlogTitle'
  | 'ConnectLink';

export type EditableLinkVariants = Extract<EditableContentVariants, 'Link' | 'ConnectLink'>;
export type EditableTextNodeVariants = Exclude<EditableContentVariants, EditableLinkVariants>;

interface EditableTypographiesStyle {
  style: CSSProperties;
  color: {
    Placeholder: keyof colors;
    Text: keyof colors;
  };
}

export type EditableTextTypographies = Record<EditableTextNodeVariants, EditableTypographiesStyle>;

export type EditableLinkTypographies = Record<EditableLinkVariants, EditableTypographiesStyle>;

export interface EditableTypographies {
  Text: EditableTextTypographies;
  Link: EditableLinkTypographies;
}

export type SectionHandlerBreakPoints = Record<Sections, string>;
