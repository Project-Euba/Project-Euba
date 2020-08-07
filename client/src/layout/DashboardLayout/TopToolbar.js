import React, { Component } from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import EubaLogo from '../../components/EubaLogo';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {},
  toolbar: {
    height: 64,
    backgroundColor: theme.palette.background.paper
  },
}));

const TopToolbar = (className, onMobileNavOpen, ...rest) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} elevation={0}>
      <Toolbar className={classes.toolbar}>
          <Link to='/app/dashboard'>
            <EubaLogo />
          </Link>
      </Toolbar>
    </AppBar>
  );
};

export default TopToolbar;
