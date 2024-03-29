import { createTheme } from '@mui/material/styles';
import { Colors } from './colors';
import {
  EditableTypographies,
  ImageUploaderWidth,
  SectionHandlerBreakPoints,
  SectionsListWidth,
  borderRadii,
  colors,
} from './types';

declare module '@mui/material/styles' {
  interface Theme {
    colors: colors;
    borderRadii: borderRadii;
    MenuListBreakPoint: SectionsListWidth;
    ImageUploaderBreakPoints: ImageUploaderWidth;
    EditableTypographies: EditableTypographies;
    sectionHandlerBreakPoint: SectionHandlerBreakPoints;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors: colors;
    borderRadii: borderRadii;
    MenuListBreakPoint: SectionsListWidth;
    ImageUploaderBreakPoints: ImageUploaderWidth;
    EditableTypographies: EditableTypographies;
    sectionHandlerBreakPoint: SectionHandlerBreakPoints;
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
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          letterSpacing: '0.02em',
          fontFamily: 'Inter',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.disabled === true ? { opacity: '0.6' } : {}),
        }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          '*': {
            boxSizing: 'border-box',
          },
        },
      },
    },
  },
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
  EditableTypographies: {
    Text: {
      SiteTitle: {
        style: {
          fontSize: '16px',
        },
        color: {
          Placeholder: 'softGray',
          Text: 'black',
        },
      },
      Title: {
        style: {
          fontWeight: '500',
          fontSize: '70px',
          lineHeight: '84px',
          letterSpacing: '0.03em',
        },
        color: {
          Placeholder: 'lightSilver',
          Text: 'black',
        },
      },
      SubTitle: {
        style: {
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '28px',
        },
        color: {
          Placeholder: 'mediumGray',
          Text: 'black',
        },
      },
      HeroName: {
        style: {
          fontWeight: '600',
          fontSize: '16px',
          lineHeight: '19.36px',
        },
        color: {
          Placeholder: 'mediumGray',
          Text: 'black',
        },
      },
      HeroEmail: {
        style: {
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '16.94px',
        },
        color: {
          Placeholder: 'mediumGray',
          Text: 'black',
        },
      },
      SkillSetTitle: {
        style: {
          fontWeight: '700',
          fontSize: '20px',
          lineHeight: '28px',
        },
        color: {
          Placeholder: 'lightSilver',
          Text: 'black',
        },
      },
      SkillSetDescription: {
        style: {
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '24px',
        },
        color: {
          Placeholder: 'mediumGray',
          Text: 'black',
        },
      },
      SectionSubText: {
        style: {
          fontWeight: '500',
          fontSize: '16px',
          lineHeight: '30px',
        },
        color: {
          Placeholder: 'warmGray',
          Text: 'black',
        },
      },
      ProjectTitle: {
        style: {
          fontWeight: '500',
          fontSize: '15px',
          lineHeight: '28px',
        },
        color: {
          Placeholder: 'black',
          Text: 'black',
        },
      },
      ProjectDescription: {
        style: {
          fontWeight: '500',
          fontSize: '13px',
          lineHeight: '28px',
        },
        color: {
          Placeholder: 'charcoalGray',
          Text: 'charcoalGray',
        },
      },
      CompanyTitle: {
        style: {
          fontWeight: '600',
          fontSize: '16px',
          lineHeight: '28px',
        },
        color: {
          Placeholder: 'lightSilver',
          Text: 'black',
        },
      },
      CompanyDesignation: {
        style: {
          fontWeight: '600',
          fontSize: '13px',
          lineHeight: '28px',
        },
        color: {
          Placeholder: 'mediumGray',
          Text: 'charcoalGray',
        },
      },
      CompanyLocation: {
        style: {
          fontWeight: '500',
          fontSize: '12.8px',
          lineHeight: '24px',
        },
        color: {
          Placeholder: 'mediumGray',
          Text: 'ashGray',
        },
      },
      CompanyTimeLine: {
        style: {
          fontWeight: '500',
          fontSize: '12.8px',
          lineHeight: '24px',
        },
        color: {
          Placeholder: 'mediumGray',
          Text: 'ashGray',
        },
      },
      CompanyExperience: {
        style: {
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '28px',
        },
        color: {
          Placeholder: 'black',
          Text: 'black',
        },
      },
      BlogTitle: {
        style: {
          fontWeight: '500',
          fontSize: '15px',
          lineHeight: '28px',
        },
        color: {
          Placeholder: 'lightSilver',
          Text: 'black',
        },
      },
      SectionTitle: {
        style: {
          fontWeight: '600',
          fontSize: '30px',
          lineHeight: '28px',
        },
        color: {
          Placeholder: 'lightSilver',
          Text: 'black',
        },
      },
    },
    Link: {
      Link: {
        style: {
          fontSize: '14px',
          lineHeight: '24px',
        },
        color: {
          Placeholder: 'electricBlue',
          Text: 'steelGray',
        },
      },
      ConnectLink: {
        style: {
          fontSize: '16px',
          lineHeight: '30px',
        },
        color: {
          Placeholder: 'black',
          Text: 'black',
        },
      },
    },
  },
  sectionHandlerBreakPoint: {
    aboutYou: '428px',
    skillSet: '622px',
    projects: '461px',
    experience: '633px',
    blogsAndResources: '450px',
    letsConnect: '',
  },
});
