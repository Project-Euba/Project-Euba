import { createMuiTheme, colors } from "@material-ui/core";
import shadows from "./shadows";
import typography from "./typography";

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  },
  shadows,
  typography,
});

export default theme;
