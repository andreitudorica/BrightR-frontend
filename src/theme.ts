import { responsiveFontSizes, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const defaultTheme = createTheme();
// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00FFFF',
    },
    secondary: {
      main: '#EBFF00',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
