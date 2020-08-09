import { createMuiTheme, colors } from "@material-ui/core";
import shadows from "./shadows";
import typography from "./typography";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: colors.blue[600]
    },
    secondary: {
      main: colors.blue[600]
    },
    text: {
      primary: colors.blueGrey[200],
      secondary: colors.blueGrey[400]
    }
  },
  shadows,
  typography,
});

export default theme;