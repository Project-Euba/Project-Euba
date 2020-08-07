import React from 'react';
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: 40,
    width: 70,
  },
});

const EubaLogo = (props) => {
  let classes = useStyles();
  return (
    <img
      alt="Logo"
      src="/static/euba.png"
      className={classes.root}
      {...props}
    />
  );
};

export default EubaLogo;
