import React from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import EubaLogo from '../../components/EubaLogo';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {},
  toolbar: {
    height: 64,
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0px 0.5px 3px 0px rgba(0,0,0,0.75)"
  },
  eubaLogo: {
    height: 40,
    width: 72,
    leftMargin: 30
  },
  leftMargin: {
    // marginLeft: 60
  }
}));

const TopToolbar = (className, onMobileNavOpen, ...rest) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} elevation={0}>
      <Toolbar className={classes.toolbar}>
          <Link to='/app/dashboard' className={classes.leftMargin}>
            <EubaLogo className={classes.eubaLogo}/>
          </Link>
      </Toolbar>
    </AppBar>
  );
};

export default TopToolbar;
