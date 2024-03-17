import { Grid } from '@mui/material';
import { HeroSection } from './HeroSection';
import { SiteTitle } from '../components/SiteTitle/SiteTitle';
import { TitleSection } from './TitleSection';
import { SectionAppender } from '../components/AddNewSection/SectionAppender';

export const GridSections = () => {
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
    </Grid>
  );
};
