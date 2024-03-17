import { EditableLinkVariants, EditableTextNodeVariants } from '../../Theme/types';

export const EDITABLE_TEXT_NODE_PLACEHOLDERS: Readonly<Record<EditableTextNodeVariants, string>> = {
  SiteTitle: 'Enter site title',
  Title: 'Click to add title',
  SubTitle: 'Click to add subtitle',
  HeroName: 'Your name here',
  HeroEmail: 'Enter email',
  SkillSetTitle: 'Untitled',
  SkillSetDescription: 'Write description here...',
  ProjectTitle: 'Enter project title',
  ProjectDescription: 'Add description',
  CompanyTitle: 'Enter company title',
  CompanyDesignation: 'Enter designation',
  CompanyLocation: '+ Add location',
  CompanyTimeLine: '+ Add timeline',
  CompanyExperience: 'Add description...',
  BlogTitle: 'Enter title here...',
  SectionTitle: 'Enter title here',
  SectionSubText: 'Add subtext here...',
};

export const EDITABLE_LINK_NODE_PLACEHOLDERS: Readonly<Record<EditableLinkVariants, string>> = {
  ConnectLink: 'Lets connect',
  Link: 'Add link',
};
