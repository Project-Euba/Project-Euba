import React, { useState, useEffect } from "react";
import { makeVar } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Container,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import clsx from "clsx";
import EubaLogo from "../../components/EubaLogo";
import Page from "../../components/Page";
import VersionNumber from "../../components/VersionNumber";

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
  const classes = useStyles();
  const navigate = useNavigate();
  // First checks if there is already a token in local storage
  // if there is, just send them straight to the dashboard
  let token = localStorage.getItem("login_token");
  useEffect(() => {
    if (token) navigate("/app/dashboard");
  });
  // React Hook States for password/username
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ usernameError, setUsernameError ] = useState(false);
  const [ passwordError, setPasswordError ] = useState(false);
  // Submit Button Function
  const onSubmit = () => {
    // Makes sure there is a password or username,
    // if not put an error message on the field
    console.log(username);
    console.log(password);
    let error = false;
    if (!password) {
      error = true;
      console.error("No Password!");
      setPasswordError(true);
    }
    if (!username) {
      error = true;
      console.error("No Username!");
      setUsernameError(true);
    }
    // TODO: REPLACE WITH REQUEST TO BACKEND FOR AUTH
    // Sends a request to the server to get a login token
    if (!error) {
      token = "placeholdertoken"; // localStorage.removeItem("login_token") to clear
      // Adds the token to local storage
      localStorage.setItem("login_token", token);
      // Brings you to the main dashboard
      navigate("/app/dashboard");
    }
  };
  // Main render function
  return (
    <Page className={classes.root} title="Login">
      <Box className={clsx(classes.root, classes.centerAlign)}>
        <Container
          maxWidth="md"
          className={clsx(classes.loginBox, classes.centerAlign)}
        >
          <EubaLogo width="110px" height="60px" />
          <TextField
            error={usernameError}
            label="Username"
            autoComplete="username"
            variant="outlined"
            className={classes.loginField}
            onChange={(event) => {
              if (usernameError) setUsernameError(false);
              setUsername(event.target.value);
            }}
          />
          <TextField
            error={passwordError}
            label="Password"
            autoComplete="current-password"
            variant="outlined"
            inputProps={{type: "password"}}
            className={classes.loginField}
            onChange={(event) => {
              if (passwordError) setPasswordError(false);
              setPassword(event.target.value);
            }}
          />
          <Button variant="outlined" className={classes.loginButton} onClick={onSubmit}>
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
