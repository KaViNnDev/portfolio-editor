import React from 'react';
import { Sections, selectActiveSections } from '../Store/sectionsSlice';
import { useSelector } from '../Store/helper';
import { AboutMeSection } from './AboutMeSection';
import { EditSectionHandler } from '../components/EditSectionHandler/EditSectionHandler';
import { BlogAndResourceSection } from './BlogAndResourceSection';
import { ExperienceSection } from './ExperienceSection';
import { LetsConnectSection } from './LetsConnectSection';
import { ProjectsSection } from './ProjectsSection';
import { SkillsetSection } from './SkillsetSection';
import { Box } from '@mui/material';

const getSection = (type: Sections) => {
  switch (type) {
    case 'aboutYou':
      return AboutMeSection;
    case 'blogsAndResources':
      return BlogAndResourceSection;
    case 'experience':
      return ExperienceSection;
    case 'letsConnect':
      return LetsConnectSection;
    case 'projects':
      return ProjectsSection;
    case 'skillSet':
      return SkillsetSection;
  }
};

export const SectionHandler = () => {
  const activeSections = useSelector(selectActiveSections);
  return (
    <>
      {activeSections.map((section) => {
        const Component = getSection(section.type);

        return (
          <EditSectionHandler sectionType={section.type}>
            {(isEditable) => {
              return (
                <Box
                  key={section.type}
                  id={section.type}
                >
                  <Component isEditable={isEditable} />
                </Box>
              );
            }}
          </EditSectionHandler>
        );
      })}
    </>
  );
};
