import React from "react";
import Page from "../../components/Page";
import clsx from "clsx";
import Loader from "react-loader-spinner";
import EubaUtils from "../../util/EubaUtils";
import { makeStyles, useTheme, Box, CircularProgress } from "@material-ui/core";

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

const pickLoader = [
  "BallTriangle",
  "Circles",
  "Grid",
  "ThreeDots",
  "MutatingDots"
]

const Loading = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  // Picks a random spinner type
  let randomIndex = EubaUtils.randomIntFromInterval(0, pickLoader.length - 1); 
  let pickedLoader = pickLoader[randomIndex];
  return (
    <Page title="Loading" className={classes.root}>
      <Box className={clsx(classes.centerAlign, classes.root)}>
        <Loader
          type={pickedLoader}
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
