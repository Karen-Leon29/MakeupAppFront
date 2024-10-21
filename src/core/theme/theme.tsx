import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#B682FA', 
      dark: '#6C4D94', 
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF', 
      light: '#f1e3fe',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF', 
    },
    text: {
      primary: '#000',
      secondary: '#333',
    },
    error: {
      main: '#FF0000',
      light: '#FFCDD2',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default theme;
