import React from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";

const EubaLogo = (props) => {
  return (
    <img
      alt="Logo"
      src="/static/euba.png"
      {...props}
    />
  );
};

export default EubaLogo;
