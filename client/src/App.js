import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { useRoutes, useNavigate } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import theme from "./theme";
import routes from "./routes";
import GlobalStyles from "./components/GlobalStyles";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./App.css";

const App = () => {
  const routing = useRoutes(routes);
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {routing}
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
