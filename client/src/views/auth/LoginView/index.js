import React, { useState } from "react";
import {
  Box,
  TextField,
  Container,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import clsx from "clsx";
import EubaLogo from "../../../components/EubaLogo";
import Page from "../../../components/Page";
import VersionNumber from "../../../components/VersionNumber";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: "100%",
    width: "100%",
  },
  mainBox: {
    height: "100%",
    width: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  centerAlign: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
  loginBox: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    height: "400px",
    width: "400px",
    padding: "20px",
  },
  loginField: {
    width: "80%",
  },
  loginButton: {
    width: "65%",
  },
  versionNumBox: {
    position: "absolute",
    bottom: 13,
    left: 0,
  },
}));

const LoginView = () => {
  let classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Page className={classes.root} title="Login">
      <Box className={clsx(classes.root, classes.centerAlign)}>
        <Container
          maxWidth="md"
          className={clsx(classes.loginBox, classes.centerAlign)}
        >
          <EubaLogo className={classes.eubaLogo} width="110px" height="60px" />
          <TextField
            label="Username"
            autoComplete="username"
            variant="outlined"
            className={classes.loginField}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <TextField
            label="Password"
            autoComplete="current-password"
            variant="outlined"
            className={classes.loginField}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <Button variant="outlined" className={classes.loginButton}>
            <Typography color="secondaryColor">Login</Typography>
          </Button>
        </Container>
      </Box>
      <Container className={classes.versionNumBox}>
        <VersionNumber />
      </Container>
    </Page>
  );
};

export default LoginView;
