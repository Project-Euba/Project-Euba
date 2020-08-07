import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  BarChart as BarChartIcon,
} from 'react-feather';
import SideNavigationItem from './SideNavigationItem';


const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  }
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const SideNavigationBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <></>
  );
};

SideNavigationBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

SideNavigationBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default SideNavigationBar;
