import { createTheme } from '@mui/material/styles';
import { green, grey, red } from '@mui/material/colors';

// Current fonts imported from google fonts: Montserrat, Kumbh Sans, Tenor Sans

const rawTheme = createTheme({
  palette: {
    primary: {
      light: '#69696a',
      main: '#28282a',
      dark: '#1e1e1f',
      contrastText: 'rgba(0,0,0,0.8)',
    },
    secondary: {
      light: '#21c37e',
      main: '#27cc62',
      dark: '#16b3b2',
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
    text: {
      primary: 'rgba(0,0,0,0.92)',
      secondary: 'rgba(0,0,0,0.69)',
      disabled: 'rgba(0,0,0,0.48)',
      hint: 'rgba(0,0,0,0.48)',
    },
    neutral: {
      light: '#fbfbfb',
      main: '#fafafa',
      dark: '#e6edf0',
      disabled: '#afafaf',
    },
  },
  typography: {
    fontFamily: ['Kumbh Sans', 'sans-serif'].join(','),
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: "'Tenor Sans', sans-serif",
  // textTransform: 'uppercase',
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 60,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 48,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 36,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14,
    },
    button: {
      ...rawTheme.typography.button,
      fontSize: 12,
      fontWeight: 400,
    },
  },
};

export default theme;
