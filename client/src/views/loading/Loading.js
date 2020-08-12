import React from "react";
import Page from "../../components/Page";
import clsx from "clsx";
import Loader from "react-loader-spinner";
import { makeStyles, useTheme, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.background.default,
  },
  centerAlign: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  }
}));

const Loading = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme);
  return (
    <Page title="Loading" className={classes.root}>
      <Box className={clsx(classes.centerAlign, classes.root)}>
        <Loader
          type="MutatingDots"
          className={classes.spinner}
          color={theme.palette.primary.main}
          secondaryColor={theme.palette.secondary.main}
          height={100}
          width={100}
        />
      </Box>
    </Page>
  );
};

// https://mhnpd.github.io/react-loader-spinner/

export default Loading;
