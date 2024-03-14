import { createTheme } from '@mui/material/styles';
import { Colors } from './colors';
import { SectionsListWidth, borderRadii, colors } from './types';

declare module '@mui/material/styles' {
  interface Theme {
    colors: colors;
    borderRadii: borderRadii;
    MenuListBreakPoint: SectionsListWidth;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors: colors;
    borderRadii: borderRadii;
    MenuListBreakPoint: SectionsListWidth;
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
};

export const theme = createTheme({
  colors: Colors,
  borderRadii: borderRadius,
  MenuListBreakPoint: {
    md: '369px',
    sm: '239px',
  },
});
