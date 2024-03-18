import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

type Sections =
  | 'aboutYou'
  | 'skillSet'
  | 'projects'
  | 'experience'
  | 'blogsAndResources'
  | 'letsConnect';

interface sectionPayload {
  type: Sections;
  label: string;
  title: string;
}

type SectionState = sectionPayload[];

const sectionState: SectionState = [
  {
    label: '📌  About you',
    title: 'About Me',
    type: 'aboutYou',
  },
  {
    label: '💡  Skillsets',
    title: 'Skillsets',
    type: 'skillSet',
  },
  {
    label: '🛠️  Projects',
    title: 'Projects',
    type: 'projects',
  },
  {
    label: '🌐  Experience',
    title: 'Experience',
    type: 'experience',
  },
  {
    label: '📄 Blogs and resources',
    title: 'Blogs & resources',
    type: 'blogsAndResources',
  },
  {
    label: '🔗  Lets connect',
    title: '', //Lets Connect!
    type: 'letsConnect',
  },
];

interface SectionSlice {
  sections: SectionState;
  activeSections: SectionState;
}

const initialState: SectionSlice = {
  sections: sectionState,
  activeSections: [],
};

export const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    addSection: (state, action: PayloadAction<Sections>) => {
      const isPresent = state.activeSections.find((section) => section.type === action.payload);
      if (isPresent !== undefined) return;
      const sectionValues = state.sections.find((section) => section.type === action.payload);
      if (sectionValues !== undefined) state.activeSections.push(sectionValues);
    },
    removeSection: (state, action: PayloadAction<Sections>) => {
      state.activeSections = state.activeSections.filter(
        (section) => section.type === action.payload
      );
    },
  },
});

export const { addSection, removeSection } = sectionsSlice.actions;

export const selectSections = (state: RootState) => state.sections.sections;

export const selectActiveSections = (state: RootState) => state.sections.activeSections;

export const selectFilteredActions = (state: RootState) => {
  const { activeSections, sections } = state.sections;
  const filteredSections = sections.filter(
    (section) => !activeSections.some((activeSection) => activeSection.type === section.type)
  );
  return filteredSections;
};

export default sectionsSlice.reducer;
