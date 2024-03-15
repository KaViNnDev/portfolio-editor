import { createTheme } from '@mui/material/styles';
import { Colors } from './colors';
import { ImageUploaderWidth, SectionsListWidth, borderRadii, colors } from './types';

declare module '@mui/material/styles' {
  interface Theme {
    colors: colors;
    borderRadii: borderRadii;
    MenuListBreakPoint: SectionsListWidth;
    ImageUploaderBreakPoints: ImageUploaderWidth;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors: colors;
    borderRadii: borderRadii;
    MenuListBreakPoint: SectionsListWidth;
    ImageUploaderBreakPoints: ImageUploaderWidth;
  }
}

export const borderRadius: borderRadii = {
  xs: '10px',
  sm: '15px',
  md: '16px',
  lg: '20px',
  xl: '25px',
  full: '100%',
  floatingMenuIcon: '4px',
  floatingMenuWrapper: '8px',
  imageUploader: {
    sm: '4.69px',
    md: '9.39px',
    lg: '25px',
  },
};

export const theme = createTheme({
  colors: Colors,
  borderRadii: borderRadius,
  MenuListBreakPoint: {
    md: '369px',
    sm: '239px',
  },
  ImageUploaderBreakPoints: {
    sm: {
      box: '25px',
      placeholder: '9px',
    },
    md: {
      box: '50px',
      placeholder: '18px',
    },
    lg: {
      box: '295px',
      placeholder: '40.13px',
    },
  },
});
