import { createMuiTheme } from '@material-ui/core/styles';
// import createPalette from './createPalette';

const primary = '#f57f20';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary
    },
    secondary: {
      main: '#f44336',
    },
  },
});

export default theme;