import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import {red, blue} from '@material-ui/core/colors';


let theme = createMuiTheme({
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
theme=responsiveFontSizes(theme)

export default theme;

