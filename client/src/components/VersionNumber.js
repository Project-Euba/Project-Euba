import React, { useEffect } from "react";
import { version } from "../../package.json";
import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  box: {
    textAlign: "center",
  },
}));

// Displays the version number
const VersionNumber = () => {
  const classes = useStyles();
  const versionString = version ? "Version " + version.toString() : "unknown";
  return (
    <Typography color="textSecondary" variant="h5" className={classes.root}>
      {versionString}
    </Typography>
  );
};

export default VersionNumber;
