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
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF', 
    },
    text: {
      primary: '#000',
      secondary: '#B682FA',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default theme;
