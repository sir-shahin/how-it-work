import { createTheme } from '@mui/material/styles';

let theme = createTheme();
theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: "#F7F7F4"
    },
    primary: {
      main: '#0F424D',
    },
    light: {
      main: '#fff'
    },
    body: {
      main: '#F7F7F4'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // CSS
          boxShadow: 'none'
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          background:'Transparent',
          boxShadow: "none"
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          [theme.breakpoints.up('md')]: {
            borderRadius: 12,
          },
          background:'#0F424D14',
          color: '#0F424D'
        },
      },
    },
  },
});

export default theme;