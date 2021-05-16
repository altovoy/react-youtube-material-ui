import { createMuiTheme } from '@material-ui/core/styles';
import {red, blue} from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: red,
    secondary: blue,
    background: {
        default:'#181818',
        paper: '#212121',

    }
  },
});

export default theme;

