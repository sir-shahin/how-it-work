import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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
    },
    screemPink:{
      main: '#000000'
    }
  },
  typography: {
    "fontFamily": `"DM Sans", "Arial", sans-serif`,
    h2:{
      fontFamily: 'Bai Jamjuree',
    },
    h3:{
      fontFamily: 'Bai Jamjuree',
    },
    h4:{
      fontFamily: 'Bai Jamjuree',
    },
    h5:{
      fontFamily: 'Bai Jamjuree',
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
          ["@media (min-width:800px)"]: {
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