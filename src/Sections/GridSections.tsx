import { Grid } from '@mui/material';
import { HeroSection } from './HeroSection';
import { SiteTitle } from '../components/SiteTitle/SiteTitle';
import { TitleSection } from './TitleSection';
import { SectionAppender } from '../components/AddNewSection/SectionAppender';
import { useSelector } from '../Store/helper';
import { selectActiveSections } from '../Store/sectionsSlice';
import { SectionHandler } from './SectionHandler';

export const GridSections = () => {
  const isAnySectionAvailable = useSelector(selectActiveSections).length > 0;
  return (
    <Grid
      container
      spacing={4}
    >
      <Grid
        item
        xs={12}
      >
        <SiteTitle />
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          position: {
            md: 'sticky',
          },
          top: {
            md: '0px',
          },
        }}
      >
        <HeroSection />
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
      >
        <TitleSection />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          visibility: isAnySectionAvailable ? 'hidden' : 'visible',
        }}
      >
        <SectionAppender
          isInitialSection={true}
          wrapperStyle={{
            paddingTop: {
              md: '5vw',
            },
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
      ></Grid>
      <Grid
        item
        xs={12}
        md={8}
      >
        <SectionHandler />
      </Grid>
    </Grid>
  );
};
